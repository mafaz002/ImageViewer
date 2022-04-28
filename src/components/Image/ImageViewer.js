import { useSelector } from "react-redux";
import { withLoading } from "../Hoc/withLoading";
import "./ImageViewer.css";

const ImageViewer = () => {
  const { url: src } = useSelector((state) => state.Image);

  return (
    <div className={"viewContainer"}>
      <img className={"view"} src={src} />
    </div>
  );
};

export const EnhancedImageViewer = withLoading(
  ImageViewer,
  (state) => state.Image.isLoading
);
