import { useDispatch } from "react-redux";
import { fetchImage } from "../../actions";
import AddIcon from "@material-ui/icons/Add";
import "./Add.css";

export const Add = ({ style = {} }) => {
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(fetchImage());

  return (
    <span
      style={style}
      className={"add"}
      onClick={handleAdd}
      data-test="add-component"
    >
      <AddIcon />
    </span>
  );
};
