import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap';
const App = () => {
    return (
        <>
            <Header />
                <Router>
                    <Sidebar className="col-md-2"/>
                    <Switch>
                        <div className="page">
                        <Route exact path="/"><Home className="col-md-10"/></Route>
                        {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                        {/* <Route exact path="*"><Error /></Route> */}
                    </div>
                    </Switch>
                </Router>
        </>
    )
}

export default App

