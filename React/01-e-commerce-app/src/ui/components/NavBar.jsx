import { NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {

    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('/login',{
            replace: true
        });
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bar p-2">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">RShop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation-bar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigation-bar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                    <li className="nav-item d-flex justify-content-center">
                    <NavLink
                    className={(args) => {
                        return `nav-link ${ args.isActive ? 'active': ''}`;
                    }}
                        to= "/male"
                    >
                        Male clothes
                    </NavLink>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                    <NavLink
                    className={(args) => {
                        return `nav-link ${ args.isActive ? 'active': ''}`;
                    }}
                        to= "/female"
                    >
                        Female clothes
                    </NavLink>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                    <NavLink
                    className={(args) => {
                        return `nav-link ${ args.isActive ? 'active': ''}`;
                    }}
                    to= "/offers"
                    >
                        Offers
                    </NavLink>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                    <NavLink
                        className={(args) => {
                            return `nav-link ${ args.isActive ? 'active': ''}`;
                        }}
                        to= "/search"
                    >
                        Search
                    </NavLink>
                    </li>
                </ul>
                <div className="d-flex justify-content-center">
                    <button
                        className="nav-item btn btn-outline-primary"
                        onClick={onLogOut}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}


                
                
            
        

