import { Add, Approve, Reject } from "../components";
import { RightSpacer } from "./Spacer";
import "./MainContainer.css";

export const MainContainer = ({ children }) => {
  return (
    <div className={"header"}>
      <Add />
      {children}
      <div className={"footer"}>
        <Reject />
        <RightSpacer />
        <Approve />
      </div>
    </div>
  );
};
