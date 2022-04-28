import { useSelector } from "react-redux";
import "./ApprovedImage.css";

export const ApprovedImage = () => {
  const { approvedImages } = useSelector((state) => state.Image);

  return (
    <>
      <div>
        <span className={"approved"}>
          APPROVED IMAGES ({approvedImages.length})
        </span>
        <div className={"container"}>
          {approvedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              width={"100px"}
              height={"100px"}
              style={{ marginRight: "25px" }}
            />
          ))}
        </div>
      </div>
      <div
        className={"line"}
        style={{ display: approvedImages.length ? "block" : "none" }}
      />
    </>
  );
};
