import "./Tabs.css";
import React from "react";
import ChatContainer from './../chats/ChatContainer'






function template() {

  return (
    <div ref="tabs">
      <h1>Tabs</h1>
      <div id="tabs_container" ></div>
      <ChatContainer socket={this.socket} user={this.user} logout={this.logout} />
    </div>
  );
};

export default template;
