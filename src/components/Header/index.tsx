import Logo from "../Logo";
import SwitchTheme from "../SwitchTheme";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 bg-[#101C33] absolute top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <SwitchTheme />
      </div>
    </header>
  );
};

export default Header;
