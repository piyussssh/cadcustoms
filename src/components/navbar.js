
import"./design/navbar.css"
import"../App.css"
import logo from"./brandings/CADCCLGM.png"

function Navbar(){
    return(
        <>
        <div className="navbar d-f">
            <div className="navbar-logo d-f">
                <img src={logo} className="logo-png m-tb-a"></img>
            </div>
            <div className="navbar-menu d-f">
                <ul className="ul d-f m-tb-a">
                    <li className="navbar-li">
                        Home
                    </li>
                    <li className="navbar-li">
                        Services
                    </li>
                    <li className="navbar-li">
                        Products
                    </li>
                    <li className="navbar-li">
                        Training
                    </li>
                    <li className="navbar-li" id="login">
                        Log In
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;