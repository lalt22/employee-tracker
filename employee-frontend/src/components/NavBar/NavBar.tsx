import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.scss"
import track from '../../analysis.png'

const NavBar = () => {
    return (
        <div className={styles.nav_section}>
            <nav className={styles.nav_bar}>
                <div className={styles.nav_left}>
                <img className="track" src={track} />
                    <NavLink to="trackEmp/employees">
                        <h1>trackEmp</h1>
                    </NavLink>
                </div>
            </nav>
        </div>

    )
}

export default NavBar