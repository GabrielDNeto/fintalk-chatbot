import { useChatContext } from "../../../hooks/useChatContext";
import { ChatItemTypeColorEnum } from "../../../models/Chat/colors";
import SelectColor from "../../SelectColor";
import ChatMessage from "../Message";

const EditChat = () => {
  const { chatColors, handleChangeChatColors } = useChatContext();

  return (
    <div
      id="chat-messages-wrapper"
      className="chat-wrapper w-full h-[65%] p-4 bg-gray-200 dark:bg-[#243F73] flex flex-col gap-4 overflow-auto scroll-auto"
    >
      <div className="w-full flex flex-col mx-auto justify-center gap-8">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <strong>Mensagens:</strong>

            <div className="space-y-2">
              <span className="block text-sm">Cor da fonte:</span>
              <SelectColor
                colors={["#000", "#fff"]}
                active={chatColors?.fontColor}
                handleSelectColor={(color) =>
                  handleChangeChatColors(
                    color,
                    ChatItemTypeColorEnum.FONT_COLOR,
                  )
                }
              />
            </div>

            <div className="space-y-2 mt-4">
              <span className="text-sm block">Cor de fundo:</span>
              <SelectColor
                colors={["#000", "#fff"]}
                active={chatColors?.messageBackgroundColor}
                handleSelectColor={(color) =>
                  handleChangeChatColors(
                    color,
                    ChatItemTypeColorEnum.MESSAGE_BACKGROUND_COLOR,
                  )
                }
              />
            </div>
          </div>

          <ChatMessage
            message="Personalize suas mensagens"
            date={new Date().toISOString()}
          />
        </div>
      </div>
    </div>
  );
};

export default EditChat;
