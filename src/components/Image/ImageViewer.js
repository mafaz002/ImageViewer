import { useSelector } from "react-redux";

export const ImageViewer = () => {
  const { url: src } = useSelector((state) => state.Image);

  return (
    <>
      <img
        style={{ margin: "2em" }}
        width={"1500px"}
        height={"1000px"}
        src={src}
      />
    </>
  );
};
