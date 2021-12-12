const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">ICS2608</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/">Home</a>
                            <a class="nav-link" href="/employees">Employees</a>
                            <a class="nav-link" href="/add">Add employee</a>
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar