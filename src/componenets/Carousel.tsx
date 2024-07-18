import { useState } from "react";
import "./Carousel.css";

type carouselContentTypes = [
  {
    img: string;
    imgDescription: string;
    text: string;
    author: string;
    companyRole: string;
  }
];

export default function Carousel() {
  const [carouselContent, setCarouselContent] = useState<carouselContentTypes>([
    {
      img: "/wendy-fox.jpg",
      imgDescription: "blonde lady smiling",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores, laborum repellat eos amet a inventore perspiciatis eveniet adipisci, obcaecati nesciunt aspernatur commodi? Adipisci, fugiat veniam. Amet ad laudantium minima?",
      author: "Wendy Fox",
      companyRole: "Senior Developer at Global Energy LTD",
    },
  ]);

  const contentArray = [
    {
      img: "/wendy-fox.jpg",
      imgDescription: "blonde lady smiling",
      text: "blah",
      author: "Wendy Fox",
      companyRole: "Senior Developer at Global Energy LTD",
    },
    {
      img: "/susana-jeffory.jpg",
      imgDescription: "brown haired lady smiling",
      text: "blah",
      author: "Susana Jeffory",
      companyRole: "Nurse at National Health wellfare",
    },
    {
      img: "/robert-dinero.jpg",
      imgDescription: "brown haired young man smiling",
      text: "blah",
      author: "Robert Dinero",
      companyRole: "Executive Producer at Musical Acadmey-Top Arts",
    },
    {
      img: "/jack-daniels.jpg",
      imgDescription: "brown haired man with sun glasses smiling",
      text: "blah",
      author: "Jack Daniels",
      companyRole: "Headteacher at Moonlight Peaks Academy",
    },
  ];

  function handleOnClick(buttonClick: string): void {
    if (buttonClick === "rightButton") {
      console.log("right button clicked");
    } else {
      console.log("left button clicked");
    }
  }

  return (
    <div className="carousel-container">
      <button
        className="button left-button"
        onClick={() => handleOnClick("leftButton")}
      >
        &#10092;
      </button>
      <div className="content-container">
        <img
          className="author-img"
          src={carouselContent[0].img}
          alt={carouselContent[0].imgDescription}
        ></img>
        <blockquote className="text-container">
          <p className="text paragraph">
      {carouselContent[0].text}
          </p>
          <p className="text author">{carouselContent[0].author}</p>
          <p className="text company">{carouselContent[0].companyRole}</p>
        </blockquote>
      </div>
      <button
        className="button right-button"
        onClick={() => handleOnClick("rightButton")}
      >
        &#10093;
      </button>
    </div>
  );
}
