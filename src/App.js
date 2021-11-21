import React from 'react'
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import Login from './Login Signup/Login'
import { useGlobalContext } from './Context'
import Signup from './Login Signup/Signup'
import Members from './Members/Members'
const App = () => {
    const {loggedIn}=useGlobalContext()

    return (
        <>
            {/* <Header /> */}
            <Router>
                <Sidebar className="col-md-2" />
                <div className="page">
                    <Switch>
                        <Route exact path="/">{loggedIn?<Home className="col-md-10" />:<Redirect to="/login"/>}</Route>
                        <Route exact path="/members">{loggedIn?<Members className="col-md-10" />:<Redirect to="/login"/>}</Route>
                        <Route exact path="/login">{!loggedIn?<Login className="col-md-10" />:<Redirect to="/"/>}</Route>
                        <Route exact path="/signup">{!loggedIn?<Signup className="col-md-10" />:<Redirect to="/"/>}</Route>
                        {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                        {/* <Route exact path="*"><Error /></Route> */}
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App

