// props and condition rendering

function Course(props){
    if(props.show==true){
    return (       
        <div className="card">
        <img src={props.image} alt=""/>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <h3>{props.rating}</h3>
        <span>{props.true}</span>
        </div>
    );
}
else{
    return(
        <div className="card">No courses are available</div>
    )
}
}

export default Course;


