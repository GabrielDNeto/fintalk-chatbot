import { Link } from "react-router-dom";
import logoPath from "../../assets/fintalk_logo.svg";
import { APP_ROUTES } from "../../config/routes";

const Logo = () => {
  return (
    <Link to={APP_ROUTES.home}>
      <img
        className="w-full max-w-[10rem] h-[2.75rem]"
        src={logoPath}
        alt="Fintalk"
      />
    </Link>
  );
};

export default Logo;
