import React from "react";
import Header from "./components/header";
import array from "./components/data";
import Card from "./components/card";
function App() {
  const final=array.map(item=>{
    return (<Card {...item}/>);});
  return (
    <div className="App">
    <Header/>
    {final}
    </div>
  );
}

export default App;
