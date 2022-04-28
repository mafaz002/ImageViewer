import { useSelector } from "react-redux";
import "./ImageViewer.css";

export const ImageViewer = () => {
  const { url: src } = useSelector((state) => state.Image);

  return (
    <>
      <img className={"view"} src={src} />
    </>
  );
};
