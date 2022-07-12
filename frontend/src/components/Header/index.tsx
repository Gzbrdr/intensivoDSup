import reactIcon from "../../assets/img/react-icon.svg"

import "./styles.css"

function Header() {
    return (
        <>
        <header>
            <div className="column">
                <img src={reactIcon} alt="react icon"/>    
                <h1>Treino React</h1>
            </div>
        </header>        
        </>
    )
  }

  export default Header