import React, {Component} from "react";

import "./BvnForm.css"
const BvnForm =  (props) => {
    return(
        <div className="box">
        <form action="" onSubmit={props.onSubmit}>
           <div>
                <label >Enter BVN:</label>
                <input type="text" name="bvnnumber" id="bvnnumber" className="bvn" onChange={props.handleChange} placeholder="Enter Number"></input>
            </div>
            <div>
                <input type="submit" className="btn" value="Verify" />
            </div>
            <h6>{!props.error ? <div>{props.error}</div> : "" }</h6>
        </form>
        </div> )
         } 
export default BvnForm;