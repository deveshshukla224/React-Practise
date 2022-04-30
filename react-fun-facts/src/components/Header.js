import logo from "../images/download.png"

const Header = ()=>{
    return(
        <header>
        <nav className="main-nav">
          <div id="img-header">
          <img src={logo} 
          alt="This is react logo"/>
          <h2>React Facts</h2>
          </div>
          <div className="course-header">
            <p>React Course - Project 1</p>
          </div>
        </nav>
      </header>
    )
}
export default Header;