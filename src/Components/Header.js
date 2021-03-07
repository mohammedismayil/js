import Button from "./Button";

const Header = (props)  => {

    const onClick = (e) => {
        console.log("im clicked from header component class")
    }
    return (
        <header className='header'>
            <h1>im from Header {props.title}</h1>
            <Button name='Add' onClick = {onClick} />
        </header>
    )
}


Header.defaultProps = {
    title : "Task Tracker"
}
// const headingStyle = {
   
//         // backgroundColor:"red",
//   textColor:"green",
// }
export default Header