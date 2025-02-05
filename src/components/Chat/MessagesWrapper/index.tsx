import { LoaderCircle } from "lucide-react";

import { useChatContext } from "../../../hooks/useChatContext";
import ChatMessage from "../Message";

const ChatMessagesWrapper = () => {
  const { isLoading, messages, isBotTyping } = useChatContext();

  if (isLoading) {
    return (
      <div className="w-full h-[65%] p-4 bg-gray-200 dark:bg-[#243F73] flex justify-center items-center gap-8">
        <LoaderCircle className="animate-spin" size={32} color="#fff" />
      </div>
    );
  }

  return (
    <div className="chat-wrapper w-full h-[65%] p-4 bg-gray-200 dark:bg-[#243F73] flex flex-col gap-4 overflow-auto scroll-auto">
      {messages.map((m) => (
        <div
          key={`${m.date}_${m.from}`}
          className={`w-full flex ${m.from === "user" ? "justify-end pl-8" : "justify-start pr-8"}`}
        >
          <ChatMessage message={m.message} date={m.date} />
        </div>
      ))}
      {isBotTyping && (
        <div>
          <div className="w-fit py-2 px-4 bg-white dark:bg-gray-50 rounded">
            <p className="flex items-center gap-4 text-sm mt-1">
              Digitando
              <LoaderCircle className="animate-spin" size={16} color="#000" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessagesWrapper;
