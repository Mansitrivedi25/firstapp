import { useState } from "react";

const EventHandling= ()=>{
    let c=1;
    const [count, setCount] = useState(1);
    const handleClick=()=>{
        alert("Are you Sure? you want to click it!!");
        c++;
        console.log(c);
    };
    const updateState =()=>{
        setCount(count +2);
    };

    return(
        <div className="container">
            <h1>EventHandling</h1>
        <h1>Normal Variable</h1>
    <button className="btn btn-primary" onClick={handleClick}>Clickit</button>
    <button className="btn btn-danger" onClick={updateState}>Clickit</button>
    </div>
    );
};
export default EventHandling;