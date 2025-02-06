import { ArrowLeft, ArrowRight, Bot, Settings } from "lucide-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "../../../hooks/useChatContext";

const ChatHeader = () => {
  const { isOnEditMode, setIsOnEditMode, botName, handleChangeBotName } =
    useChatContext();

  const navigate = useNavigate();

  const handleEditMode = useCallback(() => {
    setIsOnEditMode((prev) => !prev);
  }, [isOnEditMode]);

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
                isOnEditMode
                  ? "px-2 rounded bg-white text-black"
                  : "bg-transparent text-white"
              }
              minLength={4}
              maxLength={15}
              readOnly={!isOnEditMode}
              value={botName}
              onChange={({ target }) => handleChangeBotName(target.value)}
            />
          </div>
        </div>

        <button
          className={`p-2 ${isOnEditMode ? "bg-white hover:bg-pink-500 text-black hover:text-white" : " hover:bg-white text-white hover:text-black"}`}
          onClick={handleEditMode}
        >
          {isOnEditMode ? <ArrowRight size={20} /> : <Settings size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
