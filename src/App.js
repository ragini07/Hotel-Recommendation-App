import React,{ useState } from "react";
import "./style.css"
import hotelList from "./hotelList";

function App() {
  const [selectedStar,setselectedStar] = useState("Five_Star");
  function hotelClickHandler(star){
      setselectedStar(star);
  }
  return (
    <div className="App">
     <h1>🏨 Hotel Recommendation</h1>
     <p>Checkout some of the hotel where you can stay when travelling as per your budget.</p>
    
     {Object.keys(hotelList).map((star) => {
          return (<button 
            onClick={() => hotelClickHandler(star)}>
            {star}
          </button>
          )
     }
        )}
         <hr></hr>
         <div>
        <ul>
          {hotelList[selectedStar].map((star) => (
            <li
              key={star.name}>
              <div style={{ fontSize: "larger" }}> {star.name} </div>
              <div style={{ fontSize: "smaller" }}> {star.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    
  );
}

export default App;
