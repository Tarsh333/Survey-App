import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner, Stack } from 'react-bootstrap'
import Card from './Card'
import { useGlobalContext } from './Context'
// import Survey from './survey'

const Home = () => {
    const [survey, setSurvey] = useState([])
    const { following } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const getSurveys = async () => {
        setLoading(true)
        // console.log(following);
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/surveys", {
            headers: {
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
        })
        const result = await res.json()
        if (result.error) {
            window.alert("Something went wrong. Please try again.")
        } else {
        setSurvey(result.surveys)}
        setLoading(false)
        // console.log(result);
    }
    useEffect(() => {
        getSurveys()
    }, [])
    return (
        <div>
            <h1 align="center" className="my-5">Latest Surveys</h1>
            <Stack gap={4} className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto">

                {loading ? <div className="flex-center"><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div> : survey.map((data, id) => {
                    return (<Card key={id} data={data} cardno={id} />)
                })}

                {/* {something} */}
                {/* <button onClick={()=>{changeSomething('random')}}>Change state</button> */}

            </Stack>
        </div>
    )
}

export default Home