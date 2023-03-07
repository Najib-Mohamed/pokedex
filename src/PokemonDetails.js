import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function PokemonDetails() {
  const data = useLocation();
  console.log(data.state.data);
  let types = data.state.data.apiTypes.map((element) => {
    return <div className="w-[150px] rounded-3xl ombrage bg-white h-10 flex justify-center items-center">{element.name}</div>;
  });
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="containerBg">
        <div className="bgLeft"></div>
        <div className="bgRight"></div>
      </div>
      <div className="flex gap-10 z-0">
        <div>
        <Link
          to={"/"}
          className="text-white h-10 flex justify-center items-center cursor-pointer z-0  top-24 left-0 w-60 bg-orange-500 ombrage"
        >
          Go Back
        </Link>
        </div>
        <img src={data.state.data.image} alt="" />
      </div>
      <div className="h-[100%] relative w-[50%] ">
        <div className="absolute right-[-90%] top-1/4 h-20 w-[700px] bg-black z-0 ombrage">
          <div className="bgLeftPetit flex items-center justify-center">
            <p className="text-white text-4xl">No. {data.state.data.id} </p>{" "}
          </div>
          <div className="bgRightPetit flex items-center justify-center">
            <div className="transformation">
              <p className="text-white text-4xl ">{data.state.data.name} </p>
            </div>
          </div>
          <div className="h-[500px] flex z-0 w-[600px] absolute top-40 left-10">
            <div className="flex flex-col h-1/2 w-1/2">
              <div className="bg-gray-700 h-full w-full border-black border-2 justify-center items-center flex">
                Hp :{" "}
              </div>
              <div className="bg-gray-700 h-full w-full border-black border-2 justify-center items-center flex">
                Attack :{" "}
              </div>
              <div className="bg-gray-700 h-full w-full border-black border-2 justify-center items-center flex">
                Defence :{" "}
              </div>
              <div className="bg-gray-700 h-full w-full border-black border-2 justify-center items-center flex">
                special_attack :{" "}
              </div>
              <div className="bg-gray-700 h-full w-full border-black border-2 justify-center items-center flex">
                special_Defense :{" "}
              </div>
              <div className="bg-gray-700 h-full w-full border-black border-2 justify-center items-center flex">
                Speed :{" "}
              </div>
            </div>
            <div className="flex flex-col h-1/2 w-1/2">
              <div className="bg-white h-full w-full border-black border-2 justify-center items-center flex">
                {data.state.data.stats.HP}{" "}
              </div>
              <div className="bg-white h-full w-full border-black border-2 justify-center items-center flex">
                {data.state.data.stats.attack}{" "}
              </div>
              <div className="bg-white h-full w-full border-black border-2 justify-center items-center flex">
                {data.state.data.stats.defense}{" "}
              </div>
              <div className="bg-white h-full w-full border-black border-2 justify-center items-center flex">
                {data.state.data.stats.special_attack}{" "}
              </div>
              <div className="bg-white h-full w-full border-black border-2 justify-center items-center flex">
                {data.state.data.stats.special_defense}{" "}
              </div>
              <div className="bg-white h-full w-full border-black border-2 justify-center items-center flex">
                {data.state.data.stats.speed}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[50%] mt-[75%] flex justify-start">
        <div className="flex justify-around flex-wrap w-[600px] ">{types}</div>
      </div>
    </div>
  );
}
