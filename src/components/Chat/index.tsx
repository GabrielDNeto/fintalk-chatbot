import { useChatContext } from "../../hooks/useChatContext";
import EditChat from "./EditChat";
import ChatHeader from "./Header";
import ChatMessagesWrapper from "./MessagesWrapper";
import ChatSendBox from "./SendBox";

const Chat = () => {
  const { isOnEditMode } = useChatContext();

  return (
    <>
      <ChatHeader />
      {isOnEditMode ? <EditChat /> : <ChatMessagesWrapper />}
      <ChatSendBox />
    </>
  );
};

export default Chat;
