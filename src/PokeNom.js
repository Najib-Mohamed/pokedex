import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./image/pokeball.jpg"
export default function PokeNom(props) {
  
  return (
    <Link state={{data : props.data}} to={"/details/" + props.data.name} className="flex justify-evenly gap-5 mt-5 cursor-pointer" onMouseOver={(e)=>{e.preventDefault(); props.image(props.data.image)}}>
      <p>NO. {props.data.id} </p>
      <div className="flex justify-between w-60">
      <p>{props.data.name}</p>
      <img className="h-10 " src={image} alt="" />
      </div>
    </Link>
  );
}
