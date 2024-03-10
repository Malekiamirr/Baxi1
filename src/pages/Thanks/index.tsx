import NeshanMap from "@neshan-maps-platform/react-openlayers";
import { useState } from "react";

function Thanks() {
  const [location, setLocation] = useState("");
  const [text, setText] = useState(1);
  return (
    <div className="w-screen h-screen relative">
      <NeshanMap
        mapKey="web.d6b3f9705d784731ace4e7333d3094b2"
        defaultType="dreamy"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        style={{ height: "100vh", width: "100%" }}
        zoom={13}
        traffic={false}
        poi={false}
      ></NeshanMap>
      <div className="absolute bottom-0 left-0 w-full px-[34px] z-50 pb-10 space-y-6">
        <div className="flex items-end justify-end">
          <img src="../../../src/assets/currentLocation.svg" alt="location" />
        </div>
        <div className="border-2 border-secondary bg-white px-4 py-3 flex items-center justify-between rounded-3xl w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#979797]"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            dir="rtl"
            type="text"
            placeholder="حمام قلعه، حمام آیت الله کاشانی ..."
            className="h-8 outline-none placeholder:text-[#C0C2C6] w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          onClick={() => (text < 3 ? setText((prev) => prev + 1) : setText(1))}
          className="rounded-3xl text-2xl w-full h-[62px] font-bold bg-primary"
        >
          {text === 1 ? " تایید مبدأ" : text === 2 ? "تایید مقصد " : "بزن بریم"}
        </button>
      </div>
    </div>
  );
}

export default Thanks;
