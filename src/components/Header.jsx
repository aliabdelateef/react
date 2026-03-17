function Header({title ,count}) {

    return (
        <header className="header" >
            <h1>{title}</h1>
            <p> عدد المهام : {count}</p>
        </header>
    )
}

export default Header;