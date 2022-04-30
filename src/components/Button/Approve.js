import { useSelector, useDispatch } from "react-redux";
import { ApproveImage } from "../../actions";
import Done from "@material-ui/icons/Done";
import "./Approve.css";

export const Approve = ({ style = {} }) => {
  const { url, approvedImages } = useSelector((state) => state.Image);
  const { isApproveDisabled } = useSelector((state) => state.Button);
  const dispatch = useDispatch();

  const handleApprove = () =>
    !approvedImages.includes(url) &&
    !isApproveDisabled &&
    dispatch(ApproveImage(url));

  return (
    <span
      className={"approve"}
      onClick={handleApprove}
      data-test={"approve-component"}
      style={{
        ...style,
        backgroundColor: isApproveDisabled ? "grey" : "#039487",
      }}
    >
      <Done />
    </span>
  );
};
