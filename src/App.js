import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  // KODUNUZ BURAYA GELECEK
  const [range, setRange] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center m-[20px] gap-y-[150px]">
        <img
          src={range === 0 ? BASE_IMG_URL : `${BASE_IMG_URL}?blur=${range}`}
          alt="resim"
        />
        <div className="flex flex-col items-center gap-y-3">
          <h2>Blur için kaydırın</h2>
          <input
            type="range"
            min="0"
            value={range}
            max="10"
            onChange={(e) => setRange(e.target.value)}
            className="w-[150px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    </>
  );
};

export default App;
