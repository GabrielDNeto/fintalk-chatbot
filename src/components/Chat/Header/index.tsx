import { ArrowLeft, Bot } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const [isOnEditNameMode, setIsOnEditNameMode] = useState(false);
  const [chatbotName, setChatbotName] = useState("Chatbot");

  const navigate = useNavigate();

  const handleEditName = () => {
    localStorage.setItem("chatbotName", chatbotName);
    setIsOnEditNameMode(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    const commandKeys = {
      Enter: () => handleEditName(),
      Escape: () => setIsOnEditNameMode(false),
    };

    if (commandKeys[key as keyof typeof commandKeys]) {
      commandKeys[key as keyof typeof commandKeys]();
    }
  };

  useEffect(() => {
    const storedChatbotName = localStorage.getItem("chatbotName");

    if (storedChatbotName) {
      setChatbotName(storedChatbotName);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full px-8 py-4 flex justify-between items-center bg-[#101C33] text-white rounded-t-2xl">
        <div className="flex gap-8 items-center">
          <button
            name="back-button"
            className="p-2 hover:bg-white text-white hover:text-black"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex gap-4 items-center">
            <div className="w-fit h-fit p-2 bg-pink-500 rounded-4xl shadow-lg">
              <Bot size={32} />
            </div>

            <input
              type="text"
              aria-label="bot-name"
              className={
                isOnEditNameMode
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }
              minLength={4}
              maxLength={15}
              readOnly={!isOnEditNameMode}
              value={chatbotName}
              onChange={({ target }) => setChatbotName(target.value)}
              onDoubleClick={() => setIsOnEditNameMode((prev) => !prev)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
