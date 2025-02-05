import React, { createContext, useCallback, useEffect, useState } from "react";
import { IMessage, MessageFromTypeEnum } from "../../models/Chat/message";
import { BOT_RESPONSES } from "./responses";

interface IChatContext {
  isLoading: boolean;
  messages: IMessage[];
  handleSubmitMessage: (message: IMessage) => void;
}

const ChatContext = createContext<IChatContext | undefined>(undefined);

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSubmitMessage = useCallback(
    (message: IMessage) => {
      if (message.message === "/clear") {
        setMessages([]);
        localStorage.removeItem("chat-history");
        return;
      }

      setMessages((prevMessages) => [...prevMessages, message]);

      setTimeout(() => {
        const botMessage: IMessage = {
          from: MessageFromTypeEnum.BOT,
          message:
            BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)],
          date: new Date().toISOString(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 500);
    },
    [messages],
  );

  useEffect(() => {
    if (isLoading) {
      const history = localStorage.getItem("chat-history");

      if (history) {
        const parsedHistory: IMessage[] = JSON.parse(history);

        if (parsedHistory) {
          console.log("teste", parsedHistory);
          setMessages(parsedHistory);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoading, setMessages, setIsLoading]);

  return (
    <ChatContext.Provider value={{ isLoading, messages, handleSubmitMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
