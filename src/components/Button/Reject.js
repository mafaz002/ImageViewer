import { useDispatch } from "react-redux";
import { fetchImage } from "../../actions";
import Clear from "@material-ui/icons/Clear";
import "./Reject.css";

export const Reject = () => {
  const dispatch = useDispatch();
  const handleReject = () => dispatch(fetchImage());

  return (
    <span className={"reject"} onClick={handleReject}>
      <Clear />
    </span>
  );
};
