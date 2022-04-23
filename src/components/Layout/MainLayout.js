import { Add, Approve, Reject } from "../Button";
import { RightSpacer } from "./";
import "./MainLayout.css";

export const MainLayout = ({ children }) => {
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
