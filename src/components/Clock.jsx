import React, {useState} from "react";
import Typography from '@mui/material/Typography';

function Clock() {
    

    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
	return (
        <div style={{ textAlign: 'right', marginRight: '20px' ,marginTop:'20px'}}>
        <Typography variant="h1" sx={{ color: '#000000' ,fontSize:30}}>
            {time}
        </Typography>
    </div>
	);
}

export default Clock;
