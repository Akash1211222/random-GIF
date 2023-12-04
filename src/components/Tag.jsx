import axios from "axios";
import react from "react"
import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";



// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  const [tag, setTag] = useState("smoke");
  const {gif,loading, fetchData} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value)
  }

  return (
    <div className=" w-1/2 bg-pink-300 rounded-lg shadow-2xl border-b-slate-800 flex flex-col items-center gap-y-5 mt-[15px] hover:bg-pink-400 transition-all duration-1000 hover:shadow-rose-400">
      <h1 className=" text-2xl uppercase font-bold underline mt-[15px]">Random {tag} GIF</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="450" className=" m-auto rounded-lg  shadow-slate-800" />)
      }

      <input
        className=" w-9/12 bg-slate-500 rounded-3xl shadow-2xl text-lg py-2 hover:bg-slate-600 transition-all duration-700 mb-[20px] text-white text-bold text-center"
        onChange={changeHandler}
        value={tag} /> 
    


      <button onClick={clickHandler}
        className=" w-9/12 bg-slate-200 rounded-3xl shadow-2xl text-lg py-2 hover:bg-slate-400 transition-all duration-700 mb-[20px]"
      >
        Generate
      </button>
    </div>
  )
}
