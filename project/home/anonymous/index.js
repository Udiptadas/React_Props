import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return(
    <div className="card">
    <h1>My Contacts</h1>

    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tell}</p>
    <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
  <Card 
    name="Udipta"
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tell="7002856499"
    mail="udiptadas939@gmail.com"
  
  />
  <Card 
  name="jd das"
  img="https://imgs.search.brave.com/-jfxjhBltmxgHbE369aF1x7afGyDbRlq-z6W267FylU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcz/ODkzMjQ3L3Bob3Rv/L3JhYmJpdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TUdp/MDNEYS01Mk9UZFdz/UEJ5TTZVZGpPUkpx/WXJ2NjV1SUlXTzJK/OUFaST0"
  tell="8876229433"
  mail="jd@mail.com"
  />
  </div>
   
  ,document.getElementById("root")
);
