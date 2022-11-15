
import logo from '../../assets/logo.svg';
import './style.css';
function Header() {
    return (
       <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"></img>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por
                <a href="https://www.instagram.com/devsuperior.ig">@devsuperior</a>
            </p>
        </div>

       </header>
    )
}

export default Header;
