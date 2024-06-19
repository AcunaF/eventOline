import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Advertisement } from "./core/publicidad/publisher.components";
import { useState } from "react";
import { Upcoming } from "./upcoming/upcoming.components";

import metallica from "../assets/imagesmetallica.png";
import system3 from "../assets/system3.jpg";
import nirvana from "../assets/nirvana2.jpg";
import green from "../assets/green.jpg";
import linkin from "../assets/linking.jpg";
import pink from "../assets/pink.jpg";

import descarga1 from "../assets/descarga1.png";
import descarga2 from "../assets/descarga2.png";
import descarga3 from "../assets/descarga3.jpg";
import descarga4 from "../assets/descarga4.png";
import descarga5 from "../assets/descarga5.png";
import descarga8 from "../assets/descarga8.jpg";

import "./styles.scss";

export const NumberConverter = () => {
  const initialElements = [
    { id: 1, content: "Musica", image: descarga1 },
    { id: 2, content: "E-books", image: descarga2 },
    { id: 3, content: "Playlist", image: descarga3 },
    { id: 4, content: "Social Network", image: descarga4 },
    { id: 5, content: "Unplug", image: descarga5 },
    { id: 6, content: "Contact", image: descarga8 },
  ];

  const [elements, setElements] = useState(initialElements);

  const handleClick = (id: number) => {
    const element = elements.find((el) => el.id === id) as {
      id: number;
      content: string;
      image: string;
    };
    const newElements = elements.filter((el) => el.id !== id);
    newElements.push(element);
    setElements(newElements);
  };

  return (
    <>
      <div className="game-experiment">
        <h1 className="botonbtn">Choose your option</h1>
        <div className="container-principal">
          {elements.map((element) => (
            <div
              key={element.id}
              className="boton row justify-content-center align-items-center "
              onClick={() => handleClick(element.id)}
            >
              <a className="">
                <img
                  style={{ width: "90%" }}
                  src={element.image}
                  alt="Descripción de la imagen"
                />
                <span className="text"> {element.content}</span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
              </a>
            </div>
          ))}
        </div>
        <h1>Get your ticket!!</h1>
        <br></br>
        <ul className="Ticketmaster">
          <li>
            <a href="https://www.ticketmaster.com/" target="_blank">
              <img src={metallica} alt="Metallica" />
            </a>
            <a href="https://www.ticketmaster.com/" target="_blank">
              <img src={linkin} alt="linkin Park" />
            </a>
            <a href="https://www.ticketmaster.com/" target="_blank">
              <img src={nirvana} alt="Nirvana" />
            </a>
            <a href="https://www.ticketmaster.com/" target="_blank">
              <img src={green} alt="Green Day" />
            </a>
            <a href={metallica} target="_blank">
              <img src={system3} alt="System OF A Dawn" />
            </a>
            <a href={metallica} target="_blank">
              <img src={pink} alt="Pink floid" />
            </a>
          </li>
        </ul>
        <h1>Enjoy your fucking recital</h1>
        <iframe
          width="900"
          height="515"
          src="https://www.youtube.com/embed/84Tq-eAJIk4?si=BB0w5RnUJWYepYkq"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mt-5">
          <h1>Upcoming recitals... Spoiler alert damn loser</h1>
          <div className="mt-5">
            <Upcoming />
            <br></br>
            <Advertisement />
          </div>
        </div>
      </div>
    </>
  );
};
