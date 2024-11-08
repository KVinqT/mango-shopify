import { Typography } from "@mui/material";
import "../../../styles/ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="imageAncestor">
          <img
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
            className="imageStyle"
          />
        </div>
        <div className="textContainer">
          {/* title */}
          <Typography fontWeight={"bold"}>Sisburma Blazer Set</Typography>
          {/* price */}
          <Typography>Ks 45,000.00 - Ks 78,000.00</Typography>
          {/* short description */}
          <Typography fontSize={14}>The shirt is so good</Typography>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
