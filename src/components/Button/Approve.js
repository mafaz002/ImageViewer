import { useSelector, useDispatch } from "react-redux";
import { approveImage } from "../../actions";
import Done from "@material-ui/icons/Done";
import "./Approve.css";

export const Approve = () => {
  const dispatch = useDispatch();
  const { url, approvedImages } = useSelector((state) => state.Image);

  const handleApprove = () =>
    !approvedImages.includes(url) && dispatch(approveImage(url));

  return (
    <span className={"approve"} onClick={handleApprove}>
      <Done />
    </span>
  );
};
