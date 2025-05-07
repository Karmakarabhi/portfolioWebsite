import React from "react";

function Card({ website, lang, image = "https://placehold.co/300x300", desc }) {
  return (
    <div className="p-4 w-75 bg-slate-950 m-2 rounded-2xl">
      <img
        src={image}
        className="rounded-lg hover:scale-105 transition-all ease-in-out object-cover h-[200px] w-[300px]"
      />
      <div>
        <h1 className="text-2xl py-4">{website}</h1>
        <p className="text-[16px]  text-gray-400">{desc} </p>
        <div>
          <p>Tech Stack : {lang}</p>
          <button className="bg-cyan-600 p-2 px-10 rounded-lg my-5 text-white cursor-pointer">
            <a href="https://github.com/Karmakarabhi?tab=repositories">SourceCode</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
