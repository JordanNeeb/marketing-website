"use client";

import { useState } from "react";
import Header from "../components/Header";
import Docs from "../components/chat/Docs";
import Chat from "../components/chat/Chat";

const ChatPage = () => {
  const [showDocs, setShowDocs] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {showDocs ? <Docs setShowDocs={setShowDocs} /> : <Chat />}
    </div>
  );
};

export default ChatPage;
