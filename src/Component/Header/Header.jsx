import React from "react";
import "./Header.css";
import imglogo from "../images/cr7.jpg";
import videohd from "../videos/Butterfly.mp4";
import audiomp3 from "../audios/1998.mp3.mp3"; 
import {Form,Button,Col} from 'react-bootstrap'
export const HeaderSection=()=>{

    return(
        <div>
            {/* FIRST ROW */}
            <div className="heading">
            <fieldset>
            <legend>
                Guest login
            </legend>
            <br/>
            {/* 2ND ROW */}
            <label className="mar">User Name</label><br/>
            <input type="text" placeholder="Enter your Name"/>
            <br/><br/>
            <label className="mar">User Email</label><br/>
            <input type="text" placeholder="Enter your Email"/>
            <br/><br/>
            <label className="mar">User password</label><br/>
            <input type="password" placeholder="Enter your password"/>
            <br/><br/>
            <button>submit</button>
            </fieldset>
            </div>
            <br/>
            <br/><br/><br/>
            {/* 3 ROW */}
            <div className="cr7">
            <Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="middle name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  <br/><br/>
  {/* 4 ROW */}
  <label >Age</label>
  <input type="text"/>
 < label>Gender</label>
  <input type="text"/>
 < label>cast</label>
  <input type="text"/>
  < label>weight</label>
  <input type="text"/>
  <br/><br/>
  {/* 5 ROW */}
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  {/*6 row */}
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Row>
    <Col>
    <label> Mobile no</label>
      <Form.Control placeholder="mobile no" />
    </Col>
    <Col>
    <label>Education</label>
      <Form.Control placeholder="Education" />
    </Col>
    <Col>
    <label>Additional Skill</label>
      <Form.Control placeholder="Additional Skill" />
    </Col>
  </Form.Row>
  <input type="radio"/>
  <label>Check me out</label>
  <br/>
  <button>Submit</button>
  
</Form>
</div>
        </div>
    )
    }