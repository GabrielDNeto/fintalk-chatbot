import Chat from "../../components/Chat";

const Chatbot = () => {
  return (
    <div className="w-full h-full py-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-[48rem] h-full p-4 flex flex-col justify-center">
        <Chat />
      </div>
    </div>
  );
};

export default Chatbot;
