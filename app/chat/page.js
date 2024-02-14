"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Docs from "../components/chat/Docs";
import Chat from "../components/chat/Chat";

const ChatPage = () => {
  const [showDocs, setShowDocs] = useState(
    JSON.parse(localStorage.getItem("jnShowDocs"))
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jnShowDocs = localStorage.getItem("jnShowDocs");

    if (jnShowDocs === "null") {
      setShowDocs(true);
    } else {
      setShowDocs(JSON.parse(jnShowDocs));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("jnShowDocs", JSON.stringify(showDocs));
  }, [showDocs]);

  if (loading) {
    return <div className="h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {showDocs ? <Docs setShowDocs={setShowDocs} /> : <Chat />}
    </div>
  );
};

export default ChatPage;
