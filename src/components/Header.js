import logo from "../images/logo.png"
import Search from "./Search";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-contain container">
            <img className= "logo" src={logo} alt="" />
            <h2>premium recipes</h2>
        </div>
        <div className="btn-grp">

        </div>
      </nav>
      <Search />
    </header>
  );
};

export default Header;
