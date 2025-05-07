import React from "react";
import Card from "../Components/Card";
function Projects() {
  return (
    <div>
      <p className="text-3xl md:text-5xl text-blue-400 font-bold my-10 pl-10 md:pl-46">
        My Projects
      </p>
      <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-wrap justify-center">
          <Card website={"Currency Exchanger"}  lang={"React js, CSS"}/>
          <Card website={"Stock image website"}   lang={"HTML CSS Javascript"}/>
          <Card website={"Portfolio website"}  lang={"React js , Tailwind"} />
          <Card website={"Ai image generator"}  lang={"HTML CSS Javascript"} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
