import { useSelector } from "react-redux";
import "./ApprovedImage.css";

export const ApprovedImage = () => {
  const { approvedImages } = useSelector((state) => state.Image);

  return (
    <>
      <span className={"approved"}>
        APPROVED IMAGES ({approvedImages.length})
      </span>
      <div>
        {approvedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            width={"150px"}
            height={"150px"}
            style={{ marginRight: "25px" }}
          />
        ))}
      </div>
    </>
  );
};
