import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SelectRemoverButton = ({
  handleRemove,
  value,
}: {
  handleRemove: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}) => {
  return (
    <Button
      disabled={value === "" && true}
      variant="contained"
      sx={{
        height: "40px",
        margin: "auto",
        marginLeft: 2,
        background: "linear-gradient(to right bottom,  #ffea00,#F9AF22)",
      }}
      startIcon={<DeleteIcon />}
      disableElevation
      onClick={() => handleRemove("")}
    >
      Remove
    </Button>
  );
};

export default SelectRemoverButton;
