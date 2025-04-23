import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Sashin() {
  const [query] = useSearchParams();

  const id = query.get("id");

  const purhcase = id.length > 25 ? "$20.0" : "$10.0";

  const rent = id.length > 10 ? "$7.5" : "$5.0";

  return (
    <div className="overflow-x-clip flex h-screen flex-col font-jetbrains">
      <div className="flex justify-between w-full h-16 bg-zinc-700">
        <div className="flex h-full w-1/2 text-white">
          <p className="m-2 self-center font-bold text-xl">El Shutterstock</p>
          <div className="self-center h-10 w-0.5 bg-zinc-500 m-2"></div>
          <p className="m-2 self-center text-sm">Images</p>
          <p className="m-2 self-center text-sm">Videos</p>
          <p className="m-2 self-center text-sm">AI Generator</p>
          <p className="m-2 self-center text-sm">Enterprise</p>
        </div>
        <div className="flex h-full w-1/2 text-white justify-end">
          <p className="m-2 self-center text-sm">Pricing</p>
          <div className="self-center h-10 w-0.5 bg-zinc-500 m-2"></div>
          <div className="m-2 p-2 rounded-xl self-center bg-pink-600">
            <p>Login</p>
          </div>
          <div className="m-2 p-2 rounded-xl self-center bg-pink-800">
            <p>Signup</p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-600 flex w-full flex-1">
        <img src={id} className="max-h-full w-1/2 object-contain m-10" />
        <div className="h-full w-1/2 bg-gray-800 p-4">
          <p className="text-white">Purchase price: {purhcase}</p>
          <p className="text-white">Rent price: {rent}</p>
        </div>
      </div>
    </div>
  );
}
