import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {BiHash,BiMessageDetail} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
const Sidebar = () => {
    return (

        <Stack gap={3} className="sidebar">
            <div><Link><GoHome className="sidebar-icon"/><span className="sidebar-text">Home</span></Link></div>
            <div><Link><BiHash className="sidebar-icon"/><span className="sidebar-text">Explore</span></Link></div>
            <div><Link><BiMessageDetail className="sidebar-icon"/><span className="sidebar-text">Messages</span></Link></div>
            <div><Link><IoMdNotificationsOutline className="sidebar-icon"/><span className="sidebar-text">Notifications</span></Link></div>
        </Stack>

    )
}

export default Sidebar
