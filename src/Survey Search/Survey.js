import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner, Stack } from 'react-bootstrap'
import { useGlobalContext } from '../Context'
import Card from '../Card'
const Survey = () => {
    const [input, setInput] = useState(null)
    const [surveys, setSurveys] = useState([])
    const [loading, setLoading] = useState(false)
    const [first, setFirst] = useState(false)
    const searchSubmit = async (e) => {
        setLoading(true)
        setFirst(true)
        e.preventDefault()
        const res = await fetch(`https://survey-app-backend-1234.herokuapp.com/survey/query?name=${input}`, {
            headers: {
                'authorization': JSON.stringify(localStorage.getItem('token'))
            }
        })
        const result = await res.json()
        if (result.error) {
            window.alert("Something went wrong. Please try again.")
        } else {
            setSurveys(result.surveys)
        }
        setLoading(false)
        // console.log(result);
    }
    return (
        <div className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto members">
            <h2 align="center" className="mb-5">Search for surveys</h2>
            <Form className="mb-5">
                <Form.Group controlId="formSearch">
                    <Form.Control value={input} onChange={(e) => { setInput(e.target.value) }} type="text" placeholder="Search by title or tags" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={searchSubmit}>
                    Submit
                </Button>
            </Form>
            <Stack gap={4} className="mx-auto">

                {loading ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> : (surveys.length > 0 ? surveys.map((data, id) => {
                    return (<Card key={id} data={data} cardno={id} />)
                }) : first && <h2>No results found</h2>)}
            </Stack>
        </div>
    )
}

export default Survey
