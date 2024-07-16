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
  function handleOnClick() {
    authorArray.map((element) => element.author);
    authorArray.map((element) => element.description);
  }

  return (
    <div className="carousel-container">
      <div className="contents-container">
        <img
          className="author-img"
          src={authorImage}
          alt={imgDescription}
        ></img>
        <div className="text-container">
          <p className="text paragraph">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            dolores, laborum repellat eos amet a inventore perspiciatis eveniet
            adipisci, obcaecati nesciunt aspernatur commodi? Adipisci, fugiat
            veniam. Amet ad laudantium minima?"
          </p>
          <p className="text author">Susana Jeffory</p>
          <p className="text company">Senior Developer at Global Energy LTD</p>
        </div>
      </div>
    </div>
  );
}
