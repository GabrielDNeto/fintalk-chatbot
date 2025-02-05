import ChatHeader from "./Header";
import ChatMessagesWrapper from "./MessagesWrapper";
import ChatSendBox from "./SendBox";

const Chat = () => {
  return (
    <div className="w-full h-full px-4">
      <ChatHeader />
      <ChatMessagesWrapper />
      <ChatSendBox />
    </div>
  );
};

export default Chat;
