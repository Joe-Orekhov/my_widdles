import ChatCard from "./chatCard"
import BuyingPet from "./buyingPet"
import SellingPet from "./sellingPet"

import React, { useState, useEffect } from "react";

const URL = 'ws://127.0.0.1:8080';

export default function ChatContainer({ currentUser, chatRoom, setReneder, rerender }){
  const [ ws, setWs] = useState(new WebSocket(URL));
  const [ messages, setMessages] = useState([]);
  const [ message, setMessage] = useState([]);
  const [ MSGSent, setMSGSent ] = useState('');
  const [ price, setPrice ] = useState(false)

    console.log(chatRoom)
  let userMSG = {
      "transaction_id" : chatRoom.id,
      "sender_username" : currentUser.username,
      "message" : message,
    }

// ////////////////////////////////////////////////////////////////// FETCHES
  function sendMessage(e){
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


// /////////////////////////////////////////////////////////////// WEB SOCKET STUFF

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMSGSent(message)
    }

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  // /////////////////////////////////////////////////////////////////////////RETURN
  return ( 
        <div className="chat-room">
          {(currentUser.username === chatRoom.other_username?(
                <h2>{`Selling ${chatRoom.pet_name}`}</h2>
                ):(
                <h2>{`Buying ${chatRoom.pet_name}`}</h2>
              ))}
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
              <div id="no-chat-div">
                <h2 className="no-message-loading">NO MESSAGES</h2>
                <img className="monster-3" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
              </div>
            )}
            </div>

              <form
                className="form-text-input-home"
                action=""
                onSubmit={e => {
                  e.preventDefault();
                  sendMessage(e);
                }}
              >
                <input
                  className="form-text-input"
                  name='textMSG'
                  type="text"
                  placeholder={'Type a message ...'}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                <input className="send-message-button" type="submit" value={'Send'} />
              </form>
              {(currentUser.username === chatRoom.other_username?(
                <SellingPet chatRoom={chatRoom} buyer={chatRoom.other_username} buyer_id={chatRoom.buyer_id} />
                ):(
                <BuyingPet chatRoom={chatRoom} setReneder={setReneder} rerender={rerender} />

              ))}
        </div>
  )
}