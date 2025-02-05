import dayjs from "dayjs";

interface IChatMessage {
  message: string;
  date: string;
}

const ChatMessage = ({ message, date }: IChatMessage) => {
  return (
    <div>
      <div className="w-fit py-2 px-4 bg-gray-50 rounded">
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
