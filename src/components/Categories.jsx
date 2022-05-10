import React, { useState } from "react";
import axios from "axios";

const Categories = () => {
  const url = "https://www.fishwatch.gov/api/species";

  const [successData1, setSuccessData1] = useState(null);
  const [successData2, setSuccessData2] = useState(null);
  const [successData3, setSuccessData3] = useState(null);

  axios.get(url).then((res) => {
    console.log(res);
    setSuccessData1(res.data[10]["Species Illustration Photo"].src);
    setSuccessData2(res.data[81]["Species Illustration Photo"].src);
    setSuccessData3(res.data[82]["Species Illustration Photo"].src);
  });

  console.log(successData1);

  return (
    <>
      <h1 className="text-4xl font-bold">Categories</h1>
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 bg-white">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2 ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={successData1}
              />
              <p className="font-bold bg-white">Exotic Fishes</p>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={successData2}
              />
              <p className="font-bold bg-white">Shell Fish</p>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={successData3}
              />
              <p className="font-bold bg-white">Crabs</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </>
  );
};

export default Categories;
