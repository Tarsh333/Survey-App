import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap';
import AddSurvey from './AddSurvey/AddSurvey'
const App = () => {
    return (
        <>
            <Header />
            <Router>
                <Sidebar className="col-md-2" />
                <div className="page">
                    <Switch>
                        <Route exact path="/"><Home className="col-md-10" /></Route>
                        <Route exact path="/add-survey"><AddSurvey className="col-md-10" /></Route>
                        {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                        {/* <Route exact path="*"><Error /></Route> */}
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App

