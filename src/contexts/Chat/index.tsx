import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_CHAT_COLORS } from "../../config/chatDefaultColors";
import { ChatItemTypeColorEnum, IChatColors } from "../../models/Chat/colors";
import { IMessage, MessageFromTypeEnum } from "../../models/Chat/message";
import { BOT_RESPONSES } from "./responses";

interface IChatContext {
  isLoading: boolean;
  messages: IMessage[];
  handleSubmitMessage: (message: IMessage) => void;
  isBotTyping: boolean;
  isOnEditMode: boolean;
  setIsOnEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  botName: string;
  handleChangeBotName: (name: string) => void;
  chatColors: IChatColors;
  handleChangeChatColors: (color: string, item: ChatItemTypeColorEnum) => void;
}

const ChatContext = createContext<IChatContext | undefined>(undefined);

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const [isOnEditMode, setIsOnEditMode] = useState<boolean>(false);
  const [botName, setBotName] = useState<string>("Chatbot");
  const [chatColors, setChatColors] =
    useState<IChatColors>(DEFAULT_CHAT_COLORS);

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
      if (message.message === "/reset") {
        setMessages([]);
        setBotName("Chatbot");
        setChatColors(DEFAULT_CHAT_COLORS);
        localStorage.removeItem("chat-history");
        localStorage.removeItem("chat-colors");
        localStorage.removeItem("botName");
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

  const handleChangeChatColors = (
    color: string,
    item: ChatItemTypeColorEnum,
  ) => {
    const storagedColors = JSON.parse(
      localStorage.getItem("chat-colors") as string,
    );

    setChatColors((prevColors) => ({
      ...prevColors,
      [item]: color,
    }));

    localStorage.setItem(
      "chat-colors",
      JSON.stringify({
        ...storagedColors,
        [item]: color,
      }),
    );
  };

  const handleChangeBotName = (name: string) => {
    setBotName(name);

    setTimeout(() => {
      localStorage.setItem("botName", name);
    }, 500);
  };

  const contextValue = useMemo(
    () => ({
      isLoading,
      messages,
      handleSubmitMessage,
      isBotTyping,
      isOnEditMode,
      setIsOnEditMode,
      botName,
      handleChangeBotName,
      chatColors,
      handleChangeChatColors,
    }),
    [
      isLoading,
      messages,
      handleSubmitMessage,
      isBotTyping,
      isOnEditMode,
      setIsOnEditMode,
      botName,
      handleChangeBotName,
      chatColors,
      handleChangeChatColors,
    ],
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

  useEffect(() => {
    const storagedColors = JSON.parse(
      localStorage.getItem("chat-colors") as string,
    );

    if (storagedColors) {
      setChatColors(storagedColors);
    }

    const storagedBotName = localStorage.getItem("botName");

    if (storagedBotName) {
      setBotName(storagedBotName);
    }
  }, []);

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
