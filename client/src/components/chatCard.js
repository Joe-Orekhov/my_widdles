import { useState, useEffect } from "react";

export default function ChatCard({ msg, currentUser }){

console.log(msg)
  
  return (
    <div>
      <p>{msg.message}</p>
    </div>
  )
}