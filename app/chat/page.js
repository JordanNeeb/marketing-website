"use client";

import { useState } from "react";
import Header from "../components/Header";
import Docs from "../components/chat/Docs";

const ChatPage = () => {
  const [showDocs, setShowDocs] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {showDocs ? (
        <Docs setShowDocs={setShowDocs} />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-gray-600">Chat</h1>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
