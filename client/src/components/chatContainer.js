import ChatCard from "./chatCard"

import React, { useState, useEffect } from "react";

const URL = 'ws://127.0.0.1:8080';

export default function ChatContainer({ currentUser, chatRoom }){
  const [ ws, setWs] = useState(new WebSocket(URL));
  const [ messages, setMessages] = useState([]);
  const [ message, setMessage] = useState([]);
  const [ MSGSent, setMSGSent ] = useState('');
  const [ open, close ] = useState(false)

    
  let userMSG = {
      "transaction_id" : chatRoom.id,
      "sender_username" : currentUser.username,
      "message" : message,
    }
    
  function sendMessage(){
    ws.send(JSON.stringify(message));
      fetch(`send_message`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(userMSG)
        })
        .then(resp => resp.json())
        .then(data => {
          fetch(`get_messages/${chatRoom.id}`)
          .then(resp => resp.json())
          .then(data => setMessages(data))
        })
      }

useEffect(() => {
  fetch(`get_messages/${chatRoom.id}`)
  .then(resp => resp.json())
  .then(data => setMessages(data))
},[MSGSent])


// //////////////////////////////////////////////////// WEB SOCKET STUFF

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
      close(true)
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMSGSent(message)
    }

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
        close(false)
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  console.log(open)
  // //////////////////////////////////////////////////////////////RETURN
  return (

    <div>

        <div>
          <h2>{`Chating with ${chatRoom.other_username}`}</h2>
            <div className="chat-screen">
            {!!messages[0]?(
              messages.map((msg)=>{
                  if(msg.sender_username === currentUser.username) {
                    return ( <div className="user-message"><ChatCard msg={msg}/></div>)
                  }else{
                    return ( <div className="other-message"><ChatCard msg={msg}/></div>)
                  }
              })
            ):(
                <h2>seeking msgs</h2>
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
    </div>
  )
}