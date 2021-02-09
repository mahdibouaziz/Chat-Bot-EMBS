import Chatbot from "react-chatbot-kit";
import ActionProvider from "./chatbot/ActionProvider";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="chat-bot-container">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
