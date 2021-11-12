import React from 'react'
import { Col, Container,Row, Stack } from 'react-bootstrap'
import Card from './Card'
// import { useGlobalContext } from './Context'
import Survey from './survey'
const Home = () => {
    // const {something,changeSomething}=useGlobalContext()
    return (
        <div>
            <h1 align="center" className="my-5">Latest Surveys</h1>
            <Stack gap={4} className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto">
                
            {Survey.map((data,id)=>{
                return (<Card  key={id} data={data} index={id}/>)
            })}
            
            {/* {something} */}
            {/* <button onClick={()=>{changeSomething('random')}}>Change state</button> */}
            
            </Stack>
        </div>
    )
}

export default Home