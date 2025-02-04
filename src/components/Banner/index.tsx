import { MessageSquareMore } from "lucide-react";

import bannerImgUrl from "../../assets/banner-img.jpg";

const Banner = () => {
  return (
    <div className="w-full h-full py-8 flex justify-center items-center text-white">
      <div className="w-1/2 h-full flex flex-col justify-center gap-4">
        <h1 className="bg-gradient-to-l to-violet-300 from-pink-600 text-transparent bg-clip-text text-6xl font-bold">
          Nº 1 em IA <br />
          Conversacional
        </h1>
        <p className="text-xl">
          Em um mundo de IA, <br />
          ser lento não é uma opção.
        </p>

        <button className="text-white bg-pink-600 hover:bg-pink-500 mt-4 flex items-center gap-4    ">
          <MessageSquareMore size={20} />
          Falar com Chatbot
        </button>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <img
          className="rounded-4xl max-w-[37.5rem]"
          src={bannerImgUrl}
          alt="happy women using mobile and card"
        />
      </div>
    </div>
  );
};

export default Banner;
