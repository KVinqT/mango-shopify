import "./App.css";
import staticImages from "./images";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="imageContainer">
          <Link to="/login">
            <img src={staticImages.logoImage} alt="" className="image" />
          </Link>
          <h2 className="logoFont">MANGO SHOPIFY</h2>
        </div>
        <h3 className="header">DISCOVER THE BEST THINGS AT MANGO</h3>
      </div>
    </div>
  );
}

export default App;
