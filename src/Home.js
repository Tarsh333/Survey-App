import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Card from './Card'
// import { useGlobalContext } from './Context'
import Survey from './survey'
const Home = () => {
    // const {something,changeSomething}=useGlobalContext()
    return (
        <div>
            <h1 align="center" >Latest Surveys</h1>
            <Container fluid className="mt-4">
                <Row>
            {Survey.map((data,id)=>{
                return (<Col md={4} sm={6} xs={12}><Card key={id} data={data} index={id}/></Col>)
            })}
            
            {/* {something} */}
            {/* <button onClick={()=>{changeSomething('random')}}>Change state</button> */}
            </Row>
            </Container>
        </div>
    )
}

export default Home