import React,{useState} from "react";

export default function Room() {
  const [isLightOn, setLight] = useState(true);

  const flipLight = () => {
    setLight(!isLightOn);
  };

  return (
    <div className={`room ${isLightOn ? "light" : "dark"}`}>
      <button onClick={flipLight}> the room is {isLightOn ? "light" : "dark"}</button>
    </div>
  );
}