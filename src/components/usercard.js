
function Usercard(props){
    return(<>
    <div className="container">
        <h3 className= {props.status?"status online":"status offline"}>{props.status?"ONLINE":"OFFLINE"}</h3>
        <img src={props.img} alt="one"></img>
        <h2>{props.name}</h2>
        <p>New york</p>
        <p>Front-end development</p>
        <div className="buttons">
            <button className="btn">Message</button>
            <button className="btn two">Following</button>
        </div>
        <p>Skills</p>
        <ul>
            {
                props.skills.map(skills=>{
                    return <li>{skills}</li>
                })
            }
        </ul>
    </div>
    </>)
}
export default Usercard