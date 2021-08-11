import React from 'react'
import { ChatEngine } from 'react-chat-engine'

function ChatPage (props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
        This is a div with some stuff
        </div>
        <div className="col-sm-8">
          <ChatEngine
            height="80vh"
            projectID="7c477590-16b5-4b11-8818-066d92e5c0a3"
            userName="Alpharius"
            userSecret="123123"
          />
        </div>
        <div className="col-sm-2">
        This is a div with some other stuff
        </div>
      </div>
    </div>
  )
}

export default ChatPage
