import { useSelector } from "react-redux";
import { Add, Approve, Reject } from "../components";
import { RightSpacer } from "./Spacer";
import "./MainContainer.css";

export const MainContainer = ({ children }) => {
  const { isLoading, error } = useSelector((state) => state.Image);
  const customButtonStyle = {
    display: isLoading || !!error ? "none" : "inline-flex",
  };

  return (
    <div className={"header"}>
      <Add style={customButtonStyle} />
      {children}
      <div className={"footer"}>
        <Reject style={customButtonStyle} />
        <RightSpacer />
        <Approve style={customButtonStyle} />
      </div>
    </div>
  );
};
