import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg nav-bar">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand"><b>Home</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page"><b>Listado</b></Link>
        </li>
        <li className="nav-item">
          <Link to={"/Alta"} className="nav-link"><b>Alta</b></Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>

        </>
    )
}


export default NavBar;