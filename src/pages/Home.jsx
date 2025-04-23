import React from "react";
import WideLightning from "../assets/WideLightning.jpg";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const gallery = [
    "https://www.austintec.com/wp-content/uploads/2024/05/what-do-electrical-engineers-do.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/11/careers_in_electrical_engineering.jpg",
    "https://www.excelsior.edu/wp-content/uploads/2024/06/24-1252832_What-can-you-do-with-an-Electrical-Engineering-Technology-degree__1000x568.jpg",
    "https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/62db876029cb0876724c51e7_database%201.png",
    "https://vibicloud.com/wp-content/uploads/2021/04/database-server-vibicloud.jpg",
    "https://cdn.corporatefinanceinstitute.com/assets/database-1024x703.jpeg",
    "https://www.itsasap.com/hs-fs/hubfs/computer%20networks%20with%20different%20users.png?width=778&height=260&name=computer%20networks%20with%20different%20users.png",
    "https://miro.medium.com/v2/resize:fit:1024/0*yDZ4O2EsLoVJSdDC.jpeg",
    "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/network-designed-628x353.jpg",
    "https://www.elastica.co.id/wp-content/uploads/2023/12/operating-systems.jpg",
    "https://brdsg.com/img/1200/bsob0d3ebsoc9k5jdp_2/h1tDUKzaypuiL3Nh1MCYNmYkDOWx78RP6owWieE1tkw.jpg",
    "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/operating-system-t.jpg",
    "https://i.ytimg.com/vi/vH8kYVahdrU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/kN4x_9qoEEk/maxresdefault.jpg",
  ];

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
          <div
            className="m-2 p-2 rounded-xl self-center bg-pink-600"
            onClick={(e) => {
              navigate("login");
            }}
          >
            <p>Login</p>
          </div>
          <div
            className="m-2 p-2 rounded-xl self-center bg-pink-800"
            onClick={(e) => {
              navigate("signup");
            }}
          >
            <p>Signup</p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full justify-center bg-zinc-800">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb218ccf-7a10-4ab7-91da-d596d1b65c0a/ddstv67-264b975e-73f8-49ab-9f9a-7eef987d55fe.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiMjE4Y2NmLTdhMTAtNGFiNy05MWRhLWQ1OTZkMWI2NWMwYVwvZGRzdHY2Ny0yNjRiOTc1ZS03M2Y4LTQ5YWItOWY5YS03ZWVmOTg3ZDU1ZmUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.z18bzzoYOHWVntSSy8TtnVEFaKvyTb6BqWPGml0VMdE" />
        <div className="top-1/4 left-1/4 -translate-x-1/4 -translate-y-1/4 absolute flex items-center flex-col w-full">
          <p className="text-2xl m-2">Search for photos here!</p>
          <div className="bg-[#2c3a42] rounded-xl w-[70%] h-20 flex items-center justify-center">
            <div className="rounded-md w-[96%] h-10 bg-[#374a51] flex items-center">
              {/* <p className="text-gray-500 m-2"></p> */}
              <input
                placeholder="🔎 Search"
                className="bg-transparent w-full text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex bg-zinc-700">
        <p className="mx-auto text-white text-2xl m-5">
          Browse our recent collections!
        </p>
        <div className="m-2 mx-auto h-0.5 w-11/12 bg-zinc-500"></div>
        <div className="w-1/2 grid-cols-4 m-2 mx-auto flex justify-between">
          <div className="flex flex-col items-center">
            <img
              src="https://static.thenounproject.com/png/394170-200.png"
              onClick={(e) => {
                navigate("electrical");
              }}
            />
            <p className="text-white">Electrical</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://static.thenounproject.com/png/54121-200.png"
              onClick={(e) => {
                navigate("network");
              }}
            />
            <p className="text-white">Network</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://static.thenounproject.com/png/5079138-200.png"
              onClick={(e) => {
                navigate("database");
              }}
            />
            <p className="text-white">Database</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://static.thenounproject.com/png/3074295-200.png"
              onClick={(e) => {
                navigate("operating-system");
              }}
            />
            <p className="text-white">Operating System</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 bg-zinc-600 flex-col">
        <p className="text-3xl text-white m-5">Images for you!</p>
        <div className="grid grid-cols-4 w-full m-2 justify-between">
          {gallery.map((item, index) => {
            return (
              <div className="flex m-4">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={item}
                  onClick={(e) => {
                    navigate(`sashin?id=${item}`);
                  }}
                />
              </div>
            );
          })}
          <div className="w-full h-full flex justify-center items-center">
            <p
              className="text-bold text-3xl text-blue-400"
              onClick={(e) => {
                navigate("not-found");
              }}
            >
              Browse more...
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 bg-gray-700">
        <div className="m-4 text-white">
          <p className="text-2xl">About Us</p>
          <p className="m-3">
            Shutterstock is a website where you can find photos for your
            everyday needs! Used by almost everyone, we provide any kind of
            photos. You can find photos for personal, enterprise, commercial,
            etc. Explore our vast library of photo selections. All at affordable
            pricing!
          </p>
        </div>
      </div>
    </div>
  );
}
