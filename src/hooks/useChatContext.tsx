import { useContext } from "react";
import { ChatContext } from "../contexts/Chat";

const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export { useChatContext };
