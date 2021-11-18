import ChatContainer from "./chatContainer";

import React, { useState, useEffect } from "react";

const Chat =({ currentUser, setReneder, rerender }) => {

	const [ transactions, setTransactions ] = useState([])

useEffect(()=>{
	fetch('/user_chat')
	.then(resp => resp.json())
	.then(data => setTransactions(data))
},[])

  	return (
			<div className="pet">
				 <div id="create-page-background">
          <img src="https://images.squarespace-cdn.com/content/v1/55a3fd98e4b08799f6f08154/1586558112308-XROG9JCYDIEJEY53NQQD/Matrix_Cascade.gif" className="create-image" alt="" />
        </div>
				{!!transactions[0]?(
					<div className="all-chats">{
						transactions.map(chatRoom =>{
							return(
								<ChatContainer 
								chatRoom={chatRoom}
								currentUser={currentUser}
								setReneder={setReneder}
								rerender={rerender}
								/>
							)
						})
					}</div>
				):(
					<div id="mon-home-chat-load">
						<h1 className="no-messages-loading">No Messages</h1>
						<div className="monster-loading">
							<img className="monster-3 loading" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
							<img className="monster-2 loading" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
							<img className="monster-3 loading" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
						</div>
					</div>
				)}
			</div>
		)
}

export default Chat;