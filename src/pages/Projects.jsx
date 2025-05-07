import React from "react";
import Card from "../Components/Card";
import currencyExchanger from "../assets/currencyExchanger.png";
import stockImage from "../assets/stockImage.png";
import imageGenerator from "../assets/imageGenerator.png"
import Portfolio from "../assets/Portfolio.png"
const projectData = [
  {
    name: "Currency Exchanger :",
    tech: "React js, CSS",
    image: currencyExchanger,
    desc: "A simple tool to convert currency values in real time using exchange rate APIs.",
  },
  {
    name: "Stock image website :",
    tech: "HTML CSS Javascript",
    image: stockImage,
    desc: "A responsive website to browse and search high-quality stock images using an API.",
  },
  {
    name: "Portfolio website :",
    tech: "React js , Tailwind",
    image: Portfolio,
    desc: "A personal portfolio to showcase projects and skills with smooth navigation and styling.",
  },
  {
    name: "AI image generator:",
    tech: "HTML CSS Javascript",
    image: imageGenerator,
    desc: "A web app that generates unique images from text prompts using AI-powered APIs.",
  },
];

function Projects({}) {
  return (
    <div>
      <p className="text-3xl md:text-5xl text-blue-400 font-bold my-10 pl-10 md:pl-46">
        My Projects
      </p>
      <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-wrap justify-center">
          {projectData.map((project, index) => (
            <Card
              key={index}
              website={project.name}
              lang={project.tech}
              image={project.image}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
