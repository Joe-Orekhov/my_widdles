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
			<div>
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