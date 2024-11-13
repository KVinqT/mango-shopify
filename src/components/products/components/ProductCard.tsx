import { Typography } from "@mui/material";
import "../../../styles/ProductCard.css";
import { IProduct } from "../../../model";

const ProductCard = (props: IProduct) => {
  return (
    <>
      <div className="cardContainer">
        <div className="imageAncestor">
          <img src={props.image} alt="" className="imageStyle" />
        </div>
        <div className="textContainer">
          {/* title */}
          <Typography fontWeight={"bold"}>{props.title}</Typography>
          {/* price */}
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            ${String(props.price)}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
