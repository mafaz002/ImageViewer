import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import "../Image/ImageViewer.css";

export const withLoading = (Component, loadingSelector) => {
  const EnhancedComponent = () => {
    const isLoading = useSelector(loadingSelector);

    if (isLoading) {
      return (
        <div className={"viewContainer"}>
          <CircularProgress sx={{ marginLeft: "50%", marginTop: "30%" }} />
        </div>
      );
    }

    return <Component />;
  };

  return EnhancedComponent;
};
