import React, { useState } from "react";
const Message = () => {
  const [content, changeContent] = useState([])
  const [message, changeMessage] = useState("")
  const ReactEvent = () => {
    changeContent([...content, message])
  }
  const ReactMessage = (e) => {
    changeMessage(e.target.value)
  }
  const clearMessage = (i) => {
    const currentMessages = content
    currentMessages.splice(i, 1)
    changeContent([...currentMessages])
  }
  let allMessages = content.map((item, i) => {
    return (
      <li> {item} <button type="button" onClick={() => { clearMessage(i) }}>clear</button></li>
    )
  })
  return (
    <div className="box shadow">
      <div className="row pt-2">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Message Board</h5><br /><br />
              <ul>{allMessages}</ul>
              <input type="text" name="message" onChange={ReactMessage} /><br /><br />
              <button className="btn btn-info" onClick={ReactEvent}>Put Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message
​
​
​
