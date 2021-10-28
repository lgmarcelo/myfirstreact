const Greet =(props)=>{
    return (
        <div>
            {props.children}
            <h1>Hello {props.name} aka {props.heroName}</h1>
        </div>
    ) 
}

export default Greet