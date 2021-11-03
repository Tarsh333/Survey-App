import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import { Container } from 'react-bootstrap';
const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                        {/* <Route exact path="*"><Error /></Route> */}
                    </Switch>
                </Router>
            </Container>
        </>
    )
}

export default App

