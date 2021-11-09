import { useState, useEffect } from "react";

export default function ChatCard({ msg }){

  return (
    <div>
      <p>{`${msg.sender_username}: ${msg.message}`}</p>
    </div>
  )
}