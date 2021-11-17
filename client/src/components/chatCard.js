import { useState, useEffect } from "react";

export default function ChatCard({ msg }){

  return (
    <div className="message-card">
      <p className="user-text-name" >{`${msg.sender_username}:`}</p>
      <p className="user-text-message" >{`-${msg.message}`}</p>
    </div>
  )
}