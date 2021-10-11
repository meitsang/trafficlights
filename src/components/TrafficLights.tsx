import React, {useState} from 'react';
import './TrafficLights.css';

type light = "red" | "amber" | "green";

type TrafficLightsProps = {
  startingLight: light;
};

const TrafficLights = ({startingLight = "red"}:TrafficLightsProps) => { const [currentLight, setLight] = useState<light>(startingLight);


  return (
    <div>
      <div className="container">
        <div className={`light stop ${currentLight === "red" ? "on" : ""}`}></div>
        <div className={`light caution ${currentLight === "amber" ? "on" : ""}`}></div>
        <div className={`light go ${currentLight === "green" ? "on" : ""}`}></div>
      </div>
      <div>
        <button onClick={()=> setLight('red')}>Stop</button>
        <button onClick={()=> setLight('amber')}>Caution</button>
        <button onClick={()=> setLight('green')}>Go</button>
      </div>
    </div>
  );
}

export default TrafficLights;
