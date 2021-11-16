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
				):(
					<h1>NO CHATS</h1>
				)}
			</div>
		)
}

export default Chat;