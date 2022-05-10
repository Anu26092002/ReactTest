import React from "react";
import mainImg from "../asset/main.svg";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={mainImg}
        alt="fish Image"
      />
      <br/>
      <h1 className="text-4xl font-bold">HOW IT WORKS</h1>
      <br/>
      <br/>
      <h2 className="text-2xl font-semibold">Sea Basket Delivers fresh sourced seafood in a few clicks easily</h2>
      <br/>
      <br/>
    </div>
  );
};

export default Main;
