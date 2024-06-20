import React, {useState} from "react";
import CustomerCreateArea from "../components/CustomerCreateArea";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Zoom from '@mui/material/Zoom';

function AddCustomer(){

    const [isExpand, setExpand] = useState(false);

    const fabStyle={
        margin : "15px",
        color: "black" ,
        backgroundColor:"rgb(14, 186, 151)",
    }

    function toggleForm(){
        setExpand(!isExpand);
    }

    return(
    <>
        <h1>add customer</h1>
        <Zoom in={true}>
            <Fab style={fabStyle} onClick={toggleForm}>
                {isExpand? <RemoveIcon/> : <AddIcon/>}
            </Fab>
        </Zoom>
        <CustomerCreateArea isExpand={isExpand}/>

    </>
    );
}

export default AddCustomer;