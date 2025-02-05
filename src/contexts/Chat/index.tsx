import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IMessage, MessageFromTypeEnum } from "../../models/Chat/message";
import { BOT_RESPONSES } from "./responses";

interface IChatContext {
  isLoading: boolean;
  messages: IMessage[];
  handleSubmitMessage: (message: IMessage) => void;
  isBotTyping: boolean;
}

const ChatContext = createContext<IChatContext | undefined>(undefined);

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const handleSaveHistory = (message: IMessage) => {
    const historyMessages = JSON.parse(
      localStorage.getItem("chat-history") as string,
    );
    localStorage.setItem(
      "chat-history",
      JSON.stringify([...(historyMessages || []), message]),
    );
  };

  const handleBotReply = useCallback(() => {
    const botMessage: IMessage = {
      from: MessageFromTypeEnum.BOT,
      message: BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)],
      date: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    handleSaveHistory(botMessage);
    setIsBotTyping(false);
  }, [messages, setMessages]);

  const handleSubmitMessage = useCallback(
    (message: IMessage) => {
      if (message.message === "/clear") {
        setMessages([]);
        localStorage.removeItem("chat-history");
        return;
      }

      setMessages((prevMessages) => [...prevMessages, message]);
      handleSaveHistory(message);

      setTimeout(() => {
        handleBotReply();
      }, 1000);
    },
    [messages, handleBotReply, handleSaveHistory],
  );

  const contextValue = useMemo(
    () => ({
      isLoading,
      messages,
      handleSubmitMessage,
      isBotTyping,
    }),
    [isLoading, messages, handleSubmitMessage],
  );

  useEffect(() => {
    if (isLoading) {
      const history = localStorage.getItem("chat-history");

      if (history) {
        const parsedHistory: IMessage[] = JSON.parse(history);

        if (parsedHistory) {
          setMessages(parsedHistory);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoading, setMessages, setIsLoading]);

  useEffect(() => {
    const chatWrapper = document.querySelector(".chat-wrapper");

    if (chatWrapper) {
      chatWrapper.scrollTo({
        top: chatWrapper.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
