import { useRecoilState } from "recoil";
import "./index.scss";
import logo from "../../assets/logo_white.png";
import { $Navbar_fristtab, $Navbar_secondtab } from "../../store";
import { Link } from "react-router-dom";
export default function StartGuide() {
  const [first_tabs] = useRecoilState($Navbar_fristtab);
  const [second_tabs] = useRecoilState($Navbar_secondtab);
  return (
    <div id="Navbar" className="col-12">
      <div className="header">
        <div className="allitamsheader">
          <nav>
            {first_tabs.map((tab, index) => {
              return (
                <Link className="Linkheader" key={index} to={tab.link}>
                  {tab.name}
                </Link>
              );
            })}
          </nav>
          <img src={logo} />
          <nav>
            {second_tabs.map((tab, index) => {
              return (
                <Link className="Linkheader" key={index} to={tab.link}>
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <a href="./contact" className="booknow">
          Book Now
        </a>
      </div>
    </div>
  );
}
