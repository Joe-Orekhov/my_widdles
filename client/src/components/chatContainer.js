import ChatCard from "./chatCard"

import React, { useState, useEffect } from "react";

const URL = 'ws://127.0.0.1:8080';

export default function ChatContainer({ currentUser, chatRoom }){
  const [ ws, setWs] = useState(new WebSocket(URL));
  const [ messages, setMessages] = useState([]);
  const [ message, setMessage] = useState([]);
  const [ receiver_id, setReceiverId ] = useState(0);

  
  let userMSG = {
      "transaction_id" : chatRoom.id,
      "receiver_id" : receiver_id,
      "sender_id" : currentUser.id,
      "message" : message,
    }
    
  function sendMessage(){

    if(chatRoom.buyer_id === currentUser.id){
      setReceiverId(chatRoom.seller_id)
    }else{
      setReceiverId(chatRoom.buyer_id)
    }

      fetch(`send_message`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(userMSG)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
      }
        console.log(messages)

useEffect(() => {
  fetch(`get_messages/${chatRoom.id}`)
  .then(resp => resp.json())
  .then(data => setMessages(data))
},[message])

  const submitMessage = (usr, msg) => {
    const message = { user: usr, message: msg };
    ws.send(JSON.stringify(message));
    setMessages([message, ...messages]);
  }

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMessages([message, ...messages]);
    }

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);
  return (

    
    <div>
      <h1>ChatContainer</h1>
        <div className="chat-screen">
         {!!messages[0]?(
           messages.map((msg)=>{
              if(msg.sender_id === currentUser.id){
                return ( <div className="user-message"><ChatCard msg={msg} currentUser={currentUser} /></div>)
              }else{
                return ( <div className="other-message"><ChatCard msg={msg}/></div>)
              }
           })
         ):(
            <h1>seeking msgs</h1>
         )}
        </div>

	        <form
	          action=""
	          onSubmit={e => {
	            e.preventDefault();
              sendMessage();
	          }}
	        >
	          <input
	            type="text"
	            placeholder={'Type a message ...'}
	            value={message}
	            onChange={e => setMessage(e.target.value)}
	          />
	          <input type="submit" value={'Send'} />
	        </form>
    </div>
  )
}