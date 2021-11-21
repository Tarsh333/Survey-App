import React, { useEffect, useState } from 'react'
import { Col, Container,Row, Stack } from 'react-bootstrap'
import Card from './Card'
import { useGlobalContext } from './Context'
// import Survey from './survey'

const Home = () => {
    const [survey, setSurvey] = useState([])
    const {following}=useGlobalContext()
    const getSurveys=async()=>{
        // console.log(following);
        const res=await fetch("https://survey-app-backend-1234.herokuapp.com/surveys",{
            headers:{
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
        })
        const result=await res.json()
        setSurvey(result.surveys)
        // console.log(result);
    }
    useEffect(() => {
        getSurveys()
    }, [])
    return (
        <div>
            <h1 align="center" className="my-5">Latest Surveys</h1>
            <Stack gap={4} className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto">
                
            {survey.map((data,id)=>{
                return (<Card  key={id} data={data} cardNo={id}/>)
            })}
            
            {/* {something} */}
            {/* <button onClick={()=>{changeSomething('random')}}>Change state</button> */}
            
            </Stack>
        </div>
    )
}

export default Home