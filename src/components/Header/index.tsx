import Logo from "../Logo";

const Header = () => {
  return (
    <header className="w-full py-4 bg-[#101C33] absolute top-0 left-0 z-10">
      <div className="container mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
