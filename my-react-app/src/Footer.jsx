import "./Footer.css";
import viteLogo from "./assets/vite.svg";
import reactLogo from "./assets/react.svg";
import Button from "./Button";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="#">Info</a>
        <a href="#">Contact</a>
        <a href="#">Help</a>
        <p>React Team!</p>
        <Button />
      </div>
      <div className="logos">
        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite logo" />
      </div>
    </div>
  );
}

export default Footer;
