import React from "react"
import ReactDOM  from "react-dom/client"
import "./style.css"
import Usercard from "./components/usercard"

const root=ReactDOM.createRoot(document.getElementById("root"))

const details=[
    {
        name:"James",
        place:"New York",
        Designation:"Front-end devlopment",
        online:true,
        image:require("./assets/images/smilingman.jpg"),
        skill:["UI/UX Design","Front end development","HTML","CSS","JavaScript","ReactJs"]
    },
    {
        name:"James",
        place:"New York",
        Designation:"Front-end devlopment",
        online:false,
        image:require("./assets/images/smilingman.jpg"),
        skill:["UI/UX Design","Front end development","HTML","CSS","JavaScript","ReactJs"]
    },
    {
        name:"James",
        place:"New York",
        Designation:"Front-end devlopment",
        online:false,
        image:require("./assets/images/smilingman.jpg"),
        skill:["UI/UX Design","Front end development","HTML","CSS","JavaScript","ReactJs"]
    },
]
root.render(<>
        {
            details.map(item=>{
                return <Usercard 
                name={item.name} 
                place={item.place} 
                position={item.Designation} 
                status ={item.online}
                img={item.image}
                skills={item.skill}
                />
            })
        }
</>)