import { useSelector, useDispatch } from "react-redux";
import { fetchImage } from "../../actions";
import Clear from "@material-ui/icons/Clear";
import "./Reject.css";

export const Reject = ({ style = {} }) => {
  const { isRejectDisabled } = useSelector((state) => state.Button);
  const dispatch = useDispatch();

  const handleReject = () => !isRejectDisabled && dispatch(fetchImage());

  return (
    <span
      className={"reject"}
      onClick={handleReject}
      data-test={"reject-component"}
      style={{
        ...style,
        backgroundColor: isRejectDisabled ? "grey" : "#ff0000",
      }}
    >
      <Clear />
    </span>
  );
};
