import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import "../Image/ImageViewer.css";

export const withLoading = (Component, loadingSelector, errorSelector) => {
  const EnhancedComponent = () => {
    const isLoading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);

    if (isLoading) {
      return (
        <div className={"viewContainer"} data-test={"loading-container"}>
          <CircularProgress sx={{ marginLeft: "50%", marginTop: "30%" }} />
        </div>
      );
    }

    if (!!error) {
      return (
        <div className={"viewContainer"}>
          <span
            data-test={"error-container"}
            style={{
              position: "absolute",
              color: "red",
              fontSize: "50px",
              fontFamily: "Roboto",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            {error} - Refresh the browser
          </span>
        </div>
      );
    }

    return <Component />;
  };

  return EnhancedComponent;
};
