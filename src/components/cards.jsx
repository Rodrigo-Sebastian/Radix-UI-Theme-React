function Cards(props){
    return(
        <div className="Cards">
            <h4>{props.title}</h4>
            <h1>{props.amount}</h1>
            <p>{props.info}</p>
        </div>
    )
}
export default Cards