import { useDispatch } from "react-redux";
import { fetchImage } from "../../actions";
import AddIcon from "@material-ui/icons/Add";
import "./Add.css";

export const Add = () => {
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(fetchImage());

  return (
    <span className={"add"} onClick={handleAdd}>
      <AddIcon />
    </span>
  );
};
