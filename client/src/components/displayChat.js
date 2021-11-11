import ChatCard from "./chatCard"

export default function DisplayChat({currentUser, messages, chatDisplay, setChatDisplay, sendMessage, message, setMessage, chatRoom}){

  console.log(chatRoom)
  if(chatDisplay){
    return(
    <div>
    <h1>ChatContainer</h1>
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
          <button type="button" onClick={() => setChatDisplay(false)}>Close Chat</button>
        </form>
  </div>
    )
  }else{
    return(
      <button type="button" onClick={() => setChatDisplay(true)} >{`Chat about ${chatRoom.pet_name}`}</button>
    )
  }
}