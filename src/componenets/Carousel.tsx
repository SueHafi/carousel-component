import { useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const [authorImage, setAuthorImage] = useState("/wendy-fox.jpg");
  const [imgDescription, setImgDescription] = useState("blonde lady smiling");
  const authorArray = [
    { author: "/wendy-fox.jpg", description: "blonde lady smiling" },
    { author: "/susana-jeffory.jpg", description: "brown haired lady smiling" },
    {
      author: "/robert-dinero.jpg",
      description: "brown haired young man smiling",
    },
    {
      author: "/jack-daniels.jpg",
      description: "brown haired man with sun glasses smiling",
    },
  ];

  function handleOnClick(buttonClick: string): void {
    if(buttonClick === 'rightButton') {
      console.log('right button clicked');
    } else {
      console.log('left button clicked');
    }
  }

  return (
    <div className="carousel-container">
      <button
        className="button left-button"
        onClick={() => handleOnClick('leftButton')}
      >
        &#10092;
      </button>
      <div className="content-container">
        <img
          className="author-img"
          src={authorImage}
          alt={imgDescription}
        ></img>
        <blockquote className="text-container">
          <p className="text paragraph">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            dolores, laborum repellat eos amet a inventore perspiciatis eveniet
            adipisci, obcaecati nesciunt aspernatur commodi? Adipisci, fugiat
            veniam. Amet ad laudantium minima?"
          </p>
          <p className="text author">Susana Jeffory</p>
          <p className="text company">Senior Developer at Global Energy LTD</p>
        </blockquote>
      </div>
      <button
        className="button right-button"
        onClick={() => handleOnClick('rightButton')}
      >
        &#10093;
      </button>
    </div>
  );
}
