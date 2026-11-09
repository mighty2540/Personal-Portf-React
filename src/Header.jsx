//Header Component

function Header(){
    return (

        <header>
                <nav className="navbar">
                    <div className="navbar__logo">Mighty Njoroge</div>
                    <div className="navbar__content">
                        <div className="navbar__content-Project"><a className="aTags" href="#projects">Project</a></div>
                        <div className="navbar__content-About"><a className="aTags" href="#about">About</a></div>
                        <div className="navbar__content-Contact"><a className="aTags" href="#contact">Contact</a></div>
                    </div>
                </nav>
        </header>

                


    )
}

export default Header;