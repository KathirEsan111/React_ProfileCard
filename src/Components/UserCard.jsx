const details=[
  {
    name:"Kathy Barron", 
    City:"Las Vegas",
    Profile:"Front-End Developer",
    online:true, 
    image:"Images/imgs2.jpg", 
    skills:["UI/UX", "Front End Development", "HTML", "React","Node" ],
  },
  {
    name:"Sandie Martins", 
    City:"Las Vegas",
    Profile:"Back-End Developer",
    online:false, 
    image:"Images/imgs1.jpg", 
    skills:["UI/UX", "Front End Development", "HTML", "React","Node", "MONGODB" ],
  },
  {
    name:"Elizabeth", 
    City:"Las Vegas",
    Profile:"Devops Engineer",
    online:false, 
    image:"Images/imgs3.jpg", 
    skills:["UI/UX", "Front End Development", "HTML", "React","Node", "MONGODB" ],
  }
  
  ]


function User(props){
    return (
        <div className="card-container">
        <span className={props.online ? "pro online":"pro offline"}>{props.online ? "ONLINE":"OFFLINE"}</span>
        <img src={props.image} className="img"alt="user"></img>
        <h3>{props.name}</h3>
        <h3>{props.City}</h3>
        <p>{props.Profile}</p>
        <div className="buttons">
        <button className="primary">Messages</button>
        <button className="primary outline">Following</button>
        </div>
        <div className="skills">
        <h6>skills</h6>        
        <ul>
        {props.skills.map((array, index)=><li>{array}</li>)}
        </ul>
        </div>
        </div>
    )
}


export const UserCard = () => {
  return (
     details.map((values, index)=><User name={values.name} City={values.City} Profile={values.Profile}
    online={values.online} image={values.image} skills={values.skills}></User>)
    
  )
}
