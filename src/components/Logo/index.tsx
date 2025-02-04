import logoPath from "../../assets/fintalk_logo.svg";

const Logo = () => {
  return (
    <img
      className="w-full max-w-[10rem] h-[2.75rem]"
      src={logoPath}
      alt="Fintalk"
    />
  );
};

export default Logo;
