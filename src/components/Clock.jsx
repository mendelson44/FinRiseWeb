import React, {useState} from "react";

function Clock() {
    

    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
	return (
		<>
			<h1>{time}</h1>
		</>
	);
}

export default Clock;
