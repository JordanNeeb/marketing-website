"use client";

import { useState, useRef } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const Chat = () => {
  const [prompt, setPrompt] = useState("");

  const inputRef = useRef(null);
  const suggestedPrompt = "What's the weather like in San Francisco?";

  const handleInput = (value) => {
    setPrompt(value);

    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;

    if (inputRef.current.scrollHeight > 160) {
      inputRef.current.style.height = "160px";
      inputRef.current.style.overflowY = "scroll";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(prompt);

    setPrompt("");
    inputRef.current.focus();
    inputRef.current.style.height = "auto";
  };

  return (
    <div className="flex flex-col p-8 items-center justify-center h-[calc(100vh-88px)]">
      <div className="flex items-center max-w-2xl text-center grow">
        <div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            By augmenting generative AI with supplemental data from external
            sources, we can unlock real-time capabilities to improve accuracy
            and reliability.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Try asking something like,{" "}
            <span
              className="text-emerald-600 font-semibold cursor-pointer"
              onClick={() => {
                handleInput(suggestedPrompt);
                inputRef.current.focus();
              }}
            >
              {suggestedPrompt}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <form
          className="py-8 flex w-80 sm:w-96 gap-x-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative mt-2 rounded-md shadow-sm w-full">
            <textarea
              name="prompt"
              id="prompt"
              rows={1}
              autoComplete="off"
              autoFocus
              ref={inputRef}
              value={prompt}
              className="block w-full bg-gray-100 resize-none overflow-y-hidden h-12 max-h-40 rounded-md border-0 pl-4 pr-12 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 outline-0"
              onChange={(e) => handleInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <button
              type="submit"
              className={`cursor-pointer absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center m-2 rounded-md ${
                prompt.length > 0 ? "bg-white hover:bg-gray-200" : "bg-white/5"
              }`}
            >
              <ArrowUpIcon
                className={`h-5 w-5 ${
                  prompt.length > 0 ? "text-gray-900" : "text-gray-400"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
