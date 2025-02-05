import { LoaderCircle } from "lucide-react";

import { useChatContext } from "../../../hooks/useChatContext";
import ChatMessage from "../Message";

const ChatMessagesWrapper = () => {
  const { isLoading, messages } = useChatContext();

  if (isLoading) {
    return (
      <div className="w-full h-[32rem] p-4 bg-[#243F73] flex justify-center items-center gap-8">
        <LoaderCircle className="animate-spin" size={32} color="#fff" />
      </div>
    );
  }

  return (
    <div className="w-full h-[32rem] p-4 bg-[#243F73] flex flex-col gap-8">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`w-full flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
        >
          <ChatMessage message={m.message} date={m.date} />
        </div>
      ))}
    </div>
  );
};

export default ChatMessagesWrapper;
