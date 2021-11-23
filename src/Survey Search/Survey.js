import React, { useEffect, useState } from 'react'
import { Button,  Form, Stack } from 'react-bootstrap'
import { useGlobalContext } from '../Context'
import Card from '../Card'
const Survey = () => {
    const [input, setInput] = useState("")
    const [surveys, setSurveys] = useState([])
    const searchSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch(`http://localhost:5000/survey/query?name=${input}`,{
        headers: {
            'authorization': JSON.stringify(localStorage.getItem('token'))
        }})
        const result=await res.json()
        setSurveys(result.surveys)
        // console.log(result);
    }
    return (
        <div className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto members">
            <h2 align="center" className="mb-5">Search for surveys</h2>
            <Form className="mb-5">
            <Form.Group controlId="formSearch">
                <Form.Control value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="Search by title or tags" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={searchSubmit}>
                Submit
            </Button>
            </Form>
            <Stack gap={4} className="mx-auto">
                
            {surveys.map((data,id)=>{
                return (<Card  key={id} data={data} cardno={id}/>)
            })}
            </Stack>
        </div>
    )
}

export default Survey
