import { useState } from "react";


function Gettime() {
    const [Curtime, updateTime] = useState(new Date().toLocaleTimeString());
    function GetTime() {
        updateTime(new Date().toLocaleTimeString());
    }
    
    setInterval(GetTime, 1000);
    return (
        <>
            <div className="gettime-main">
                {/* <span class>When You Click on the below button then you will get the Current Time.</span> */}
                <span>Digital Clock</span>
                <p>{Curtime}</p>
                {/* <button className="gettime" onClick={GetTime}>Get Current Time</button> */}
            </div>
        </>
    )
}
export default Gettime;