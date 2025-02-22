import React, { useCallback, useState } from "react";
import { Send } from "lucide-react";

import { useChatContext } from "../../../hooks/useChatContext";
import { IMessage, MessageFromTypeEnum } from "../../../models/Chat/message";

const ChatSendBox = () => {
  const { handleSubmitMessage, isOnEditMode } = useChatContext();

  const [messageInput, setMessageInput] = useState<string>("");

  const sendMessage = useCallback(() => {
    if (messageInput.length > 0) {
      const message: IMessage = {
        from: MessageFromTypeEnum.USER,
        message: messageInput,
        date: new Date().toISOString(),
      };

      handleSubmitMessage(message);
      setMessageInput("");
    }
  }, [messageInput]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (isOnEditMode) {
    return <div className="h-20 bg-[#101C33]" />;
  }

  return (
    <div className="w-full">
      <div className="w-full p-2 md:px-8 md:py-6 flex justify-between items-center bg-[#101C33] gap-4 rounded-b-2xl">
        <textarea
          className="w-full max-h-14 resize-none bg-white p-2 rounded shadow-lg"
          placeholder="Digite sua mensagem..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="message-input"
        />
        <button
          className="bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-4 rounded shadow-lg"
          onClick={sendMessage}
          aria-label="send-message"
        >
          <span className="hidden md:block ">Enviar</span>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatSendBox;
