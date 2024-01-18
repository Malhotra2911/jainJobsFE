import React,{useContext} from "react";
import AppContext from "./Context";


export const ProgressBar = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.useDetails;

    const percent = updateContext*50;

    const background = {
        backgroundColor:"orange",
        height:18,
        width:400,
        borderRadius:30
    }
    const progress = {
        backgroundColor:"blue",
        height:8,
        width:percent,
        borderRadius:20
    }
    const text={
        fontSize: 12,
        color:"yellow"
    }
  return (
    <div className="px-5">
        <div style={background}>
            <div style={progress}>

            </div>

        </div>

    </div>
  )
}

