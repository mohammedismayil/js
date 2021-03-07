const Button = (props) => {

    // const onClick = (e) => {
    //     console.log("im clicked button class")
    // }
return (
    <button className='btn' onClick = {props.onClick}>{props.name}</button>
)
}
export default Button