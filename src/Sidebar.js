import React from 'react'
import { Stack, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import {  BiLogOutCircle } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'
import { useGlobalContext } from './Context'
import {RiSurveyLine} from 'react-icons/ri'
const Sidebar = () => {
    const { loggedIn, changeLogin } = useGlobalContext()
    const logout = <div><Link variant="light" onClick={() => { changeLogin(false) }}><BiLogOutCircle className="sidebar-icon" /><span className="sidebar-text">Log Out</span></Link></div>
    return (

        <Stack gap={3} className="sidebar">
            <div><Link to="/"><GoHome className="sidebar-icon" /><span className="sidebar-text">Home</span></Link></div>
            <div><Link to="/surveys"><RiSurveyLine className="sidebar-icon" /><span className="sidebar-text">Surveys</span></Link></div>
            <div><Link to="#notifications"><IoMdNotificationsOutline className="sidebar-icon" /><span className="sidebar-text">Notifications</span></Link></div>
            <div><Link to="/members"><FiUser className="sidebar-icon" /><span className="sidebar-text">Members</span></Link></div>
            {loggedIn && logout}
        </Stack>

    )
}

export default Sidebar
