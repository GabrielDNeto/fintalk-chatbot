import dayjs from "dayjs";
import "./styles.css";
import { useChatContext } from "../../../hooks/useChatContext";

interface IChatMessage {
  message: string;
  date: string;
}

const ChatMessage = ({ message, date }: IChatMessage) => {
  const { chatColors } = useChatContext();

  return (
    <div className="message">
      <div
        className="w-fit py-2 px-4 rounded"
        style={{
          backgroundColor: chatColors.messageBackgroundColor,
          color: chatColors.fontColor,
        }}
      >
        <div className="w-full">
          <span className="text-xs text-gray-500">
            {dayjs(new Date(date)).format("DD/MM/YYYY HH:mm")}
          </span>
        </div>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
