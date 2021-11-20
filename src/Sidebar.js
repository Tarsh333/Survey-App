import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {BiHash} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiUser} from 'react-icons/fi'
const Sidebar = () => {
    return (

        <Stack gap={3} className="sidebar">
            <div><Link to="/"><GoHome className="sidebar-icon"/><span className="sidebar-text">Home</span></Link></div>
            <div><Link to="#explore"><BiHash className="sidebar-icon"/><span className="sidebar-text">Explore</span></Link></div>
            <div><Link to="#notifications"><IoMdNotificationsOutline className="sidebar-icon"/><span className="sidebar-text">Notifications</span></Link></div>
            <div><Link to="/members"><FiUser className="sidebar-icon"/><span className="sidebar-text">Members</span></Link></div>
        </Stack>

    )
}

export default Sidebar
