import { useSearchParams } from "react-router-dom";

export default function NotFound() {
  const [query] = useSearchParams();

  const id = query.get("id");

  return (
    <div className="bg-gray-600 flex justify-center items-center w-screen h-screen font-jetbrains">
      <p className="text-white text-4xl text-bold">
        Site under construction! Please wait for further updates.
      </p>
      <p>{id}</p>
      <img src={id} />
    </div>
  );
}
