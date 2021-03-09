import Button from "./Button";

const Header = ({title,onShowAdd,showAdd}) => {

    
    return (
        <header className='header'>
            <h1>im from Header {title}</h1>
            <Button color = { showAdd ? 'red' : 'green'} name = {showAdd ? 'close' : 'add'} onClick = {onShowAdd} />
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