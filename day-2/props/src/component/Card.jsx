import React, { useState } from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const handleApply = () => {
    alert(`Applied for: ${props.post} at ${props.companyName}`);
  };

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.brandLogo} alt={props.companyName} />

          <button
            onClick={handleBookmark}
            style={{
              backgroundColor: isBookmarked
                ? "rgba(255,255,255,0.4)"
                : "rgba(255,255,255,0)",
              borderColor: isBookmarked ? "#000" : "#dadada",
              color: isBookmarked ? "#000" : "#747272",
            }}
          >
            Save <Bookmark size={12} strokeWidth={2} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.companyName} <span>{props.datePosted}</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>

        <button onClick={handleApply}>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
