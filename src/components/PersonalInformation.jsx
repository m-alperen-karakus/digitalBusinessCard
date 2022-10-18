import React from "react";
export default function PersonalInformation(){
    return(
        <div className="article">
            <h1>M. Alperen Karakuş</h1>
            <h4>Full Stack Developer</h4>
            <h5>m-alperen-karakus.com</h5>
            <div>
                <button><i className="fa-solid fa-envelope"></i>E-Mail</button>
                <button style={{background :"#5093E2",border:"#5093E2"}}><i className="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
            <div>
            <div>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsa consequatur eaque mollitia assumenda quidem nam tenetur repellat blanditiis explicabo quibusdam, necessitatibus iste culpa, delectus impedit quaerat ad sunt.</p>
            </div>

            <div>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsa consequatur eaque mollitia assumenda quidem nam tenetur repellat blanditiis explicabo quibusdam, necessitatibus iste culpa, delectus impedit quaerat ad sunt.</p>
            </div>
        </div>
        </div>
    )
}