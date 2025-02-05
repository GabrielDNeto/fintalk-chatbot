import { MessageSquareMore } from "lucide-react";

import bannerImgUrl from "../../assets/banner-img.jpg";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../config/routes";

const Banner = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center text-white">
      <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
        <h1 className="bg-gradient-to-l to-violet-300 from-pink-600 text-transparent bg-clip-text text-5xl md:text-6xl font-bold ">
          Nº 1 em IA <br />
          Conversacional
        </h1>
        <p className="text-xl">
          Em um mundo de IA, <br />
          ser lento não é uma opção.
        </p>

        <Link to={APP_ROUTES.chat}>
          <button
            className="text-white bg-pink-600 hover:bg-pink-500 mt-4 flex items-center gap-4"
            type="button"
          >
            Falar com Chatbot
            <MessageSquareMore size={20} />
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 md:h-full hidden md:visible md:flex md:flex-col md:justify-center md:items-center">
        <img
          className="rounded-4xl md:max-w-[80%]"
          src={bannerImgUrl}
          alt="happy women using mobile and card"
        />
      </div>
    </div>
  );
};

export default Banner;
