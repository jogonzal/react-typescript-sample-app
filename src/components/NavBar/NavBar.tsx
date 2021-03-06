import * as React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Link from '../Link'

const NavBar = () => (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link href='/' >
            <a className='navbar-brand' >Navbar</a>
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                    <Link href='/' className='nav-link' >
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href='/tasks' className='nav-link' >
                        Tasks
                    </Link>
                </li>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        Dropdown
                    </a>
                    <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                        <a className='dropdown-item' href='#'>Action</a>
                        <a className='dropdown-item' href='#'>Another action</a>
                        <div className='dropdown-divider'></div>
                        <a className='dropdown-item' href='#'>Something else here</a>
                    </div>
                </li>
                <li className='nav-item'>
                    <a className='nav-link disabled' href='#'>Disabled</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar