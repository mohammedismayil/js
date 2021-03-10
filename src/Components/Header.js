import Button from "./Button";
import {useLocation}  from 'react-router-dom'
const Header = ({title,onShowAdd,showAdd}) => {
const location  = useLocation()
    
    return (
        <header className='header'>
            <h1>im from Header {title}</h1>
{location.pathname === '/' && (<Button color = { showAdd ? 'red' : 'green'} name = {showAdd ? 'close' : 'add'} onClick = {onShowAdd} />)}
            
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