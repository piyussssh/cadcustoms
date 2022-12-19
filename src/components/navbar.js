

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="navbar-logo">
                CAD Customs
            </div>
            <div className="navbar-menu">
                <ul className="ul">
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
                        Login
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;