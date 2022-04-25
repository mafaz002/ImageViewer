import { useSelector } from "react-redux";

export const ImageViewer = () => {
  const { url: src } = useSelector((state) => state.Image);

  return (
    <>
      <img style={{ margin: "2em" }} width={"50%"} height={"auto"} src={src} />
    </>
  );
};
