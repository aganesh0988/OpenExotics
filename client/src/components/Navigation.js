import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
// import AuthContext from '../auth';


const Navigation = props =>
    <header className='navigation-container'>
        <img
            alt='OELogo'
            className='OELogo' src='/images/oe.jpg' />
        {/* <NavLink to="/" activeClassName="active">HOME</NavLink> */}
        <NavLink to="/users" activeClassName="active">USERS</NavLink>
        {/* <NavLink to="/login" activeClassName="active">LOG IN</NavLink>
        <NavLink to="/signup" activeClassName="active">SIGN UP</NavLink> */}
        <NavLink to='/dealerships' activeClassName="active">DEALERSHIPS</NavLink>
        <NavLink to='/login' activeclass="active">LOG OUT</NavLink>
    </header>
    ;




export default Navigation;



// function Navigation(props){

//     const {fetchWithCSRF, currentUserId} = useContext(AuthContext);
//     const [user, setUser] = useState({});

//     useEffect(() =>{
//         async function fetchUser() {
//             const response = await fetch(`/api/users/${currentUserId}`);
//             const responseData = await response.json();
//             setUser(responseData.user);
//         }
//         fetchUser();
//       }, [currentUserId]

//       const logoutUser = async ()=> {
//         const response = await fetchWithCSRF('/logout', {
//             method: 'POST',
//             credentials: 'include'
//         });
//         if(response.ok){
//             setCurrentUserId(null)
//             // return (<Redirect to='/login' />)
//         }

//     return(
//     <header className='navigation-container'>
//         <img
//             alt='OELogo'
//             className='OELogo' src='/images/oe.jpg' />
//         <NavLink to="/" activeClassName="active">HOME</NavLink>
//         <NavLink to="/users" activeClassName="active">USERS</NavLink>
//         {/* <NavLink to="/login" activeClassName="active">LOG IN</NavLink>
//         <NavLink to="/signup" activeClassName="active">SIGN UP</NavLink> */}
//         <NavLink to='/dealerships' activeClassName="active">DEALERSHIPS</NavLink>
//         <NavLink to='/login' activeclass="active">LOG OUT</NavLink>
//     </header>
//     )


// }

// export default Navigation;
