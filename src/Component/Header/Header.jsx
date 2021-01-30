import React from "react";
import "./Header.css";
import {Form,Button,Col} from 'react-bootstrap'
export const HeaderSection=()=>{

    return(
        <div className="ttt">
            <div className="headin">
            <fieldset>
            <legend>
                Guest login
            </legend>
            <br/>
            <label className="mar">User Email</label><br/>
            <input type="text" placeholder="Enter your Email"/>
            <br/><br/>
            <label className="mar">User Name</label><br/>
            <input type="text" placeholder="Enter your Name"/>
            <br/><br/>
            <br/>
            <div className="rrr">
           <Form.Group controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Accept Terms & conditions" />
           </Form.Group>
           </div>
            </fieldset>
            </div>
        </div>
    )
    }