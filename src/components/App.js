import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [index,setIndex] = useState(0);
  const nextHandle = () =>{
    if(index<props.slides.length){
        setIndex(index => index+1);
    }
    //console.log("index = "+index);
    if(index==Object.entries(props.slides).length-2){
      document.getElementById("next").disabled=true;
    }
    //console.log("index = "+index);
  }
  const prevHandle = () =>{
    //console.log("prev => index = "+index);
    if(index>0){
        setIndex(index => index-1);
        document.getElementById("next").disabled=false;
    }
    //console.log("index = "+index);
  }
  const restartHandle = (event) =>{
    //console.log("restart => index = "+index);
    setIndex(0);
    event.currentTarget.disabled = true;
    //console.log("index = "+index);
  }

  return (
    <div>
        <div>
            <h1 data-testid="title">{props.slides[index].title}</h1>
            <p data-testid="text">{props.slides[index].text}</p>
        </div>
        <div>
          <button id="restart" data-testid="button-restart" onClick={restartHandle} disabled={index==0}>Restart</button>
          <button id="prev" data-testid="button-prev" onClick={prevHandle} disabled={index==0}>Prev</button>
          <button id="next" data-testid="button-next" onClick={nextHandle} >Next</button>
        </div>
    </div>
  )
}


export default App;
