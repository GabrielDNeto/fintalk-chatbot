import React, { useCallback, useState } from "react";
import { Send } from "lucide-react";

import { useChatContext } from "../../../hooks/useChatContext";
import { IMessage, MessageFromTypeEnum } from "../../../models/Chat/message";

const ChatSendBox = () => {
  const { handleSubmitMessage } = useChatContext();

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

  return (
    <div className="w-full">
      <div className="w-full px-8 py-6 flex justify-between items-center bg-[#101C33] gap-4 rounded-b-2xl">
        <textarea
          className="w-full max-h-14 resize-none bg-white p-2 rounded shadow-lg"
          placeholder="Digite sua mensagem..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-4 rounded shadow-lg"
          onClick={sendMessage}
        >
          <span className="hidden md:block ">Enviar</span>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatSendBox;
