import React from 'react';
import { useNavigate } from 'react-router-dom';

function Thumbnail() {
  const nav = useNavigate();
  return (
    <div className="flex h-screen w-full">
      <div className=" bg-green-500 w-10 sm:w-3 " />
      <div className="flex-1 bg-gradient-to-br from-red-500 via-purple-300 via-orange-500 via-teal-600 to-sky-400 ">
        <div className="flex flex-col h-screen justify-center items-center">
          <div className="flex sm:flex-col items-center gap-5">
            <button type="button" onClick={() => nav('/pages', { replace: true })} className="transition delay-150 duration-500 ease-in-out hover:-translate-y-2 btn px-10 font-sans font-bold text-2xl sm:text-xl sm:px-5">QUIZ</button>
            <p className="text-2xl font-sans font-bold animate-bounce text-white sm:text-xl">FLOW</p>
          </div>
          <hr className="animate-pulse px-96 sm:px-24 border-none my-6 bg-yellow-300 h-2 sm:h-3 " />
          <div className="animate-spin ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 fill-cyan-400" viewBox="0 96 960 960"><path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" /></svg>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Thumbnail;
