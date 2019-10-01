import React from "react"
import {Link} from "gatsby"
import style from "../styles/nav.module.css"

export default () => {
    return(
        <ul>
            <li><Link to="/"  activeStyle={{ borderBottom: "2px solid #fff" }}>Home</Link></li>
            <li><Link to="/about"  activeStyle={{ borderBottom: "2px solid #fff" }}>About</Link></li>
        </ul>
    )
}
