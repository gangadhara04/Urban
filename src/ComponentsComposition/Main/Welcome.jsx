import React from 'react'

const Welcome = () => {
  return (
    <div id="page1">
      <p style={{ textAlign: "center", paddingTop: "8vh" }}>
        <small>
          <sub>Home / Delhi-Ncr</sub>
        </small>
        <br />
        <span
          style={{
            fontSize: "48px",
            fontWeight: "700",
            display: "inline-block",
            margin: "12px 0px 25px"
          }}
        >
          Home services, on demand.
        </span>
        <br />
        <span className="search" style={{ position: "relative" }}>
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
            alt="" width="25px" style={{position:"absolute", left:"2%", top:"12%"}}/>
          <select id="count" style={{padding:"10px 0px 10px 60px"}}>
            <option>Delhi NCR</option>
            <option value="india"></option>
            <option value="China"></option>
          </select>
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ position: "absolute",color:"grey", top:"12%", left:"29%", fontSize:"20px"}}
          ></i>
          <input type="search" placeholder="Search for Devices" id="inp1" />
        </span>
        <br />
        <small style={{ fontSize: "15px",fontWeight:"500",display:"inline-block" ,marginTop:"10px"}}>
          <u>Women's Therapies</u>, <u>Salon for Men</u>, <u>Men's Therapies</u> etc
        </small>
        </p>
    </div>
  );
}

export default Welcome;