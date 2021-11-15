import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from './Modal'
import { Button } from 'react-bootstrap'
const CardElement = ({ data, index }) => {
    const [modalIndex, setModalIndex] = useState(-1)
    const { header, title, text, link, questions, image } = data
    const [answers, setAnswers] = useState([])
    useEffect(() => {
        if (modalIndex !== -1 && modalIndex < questions.length) {
            const modal = document.querySelectorAll('.display-none')[(index * questions.length) + modalIndex]
            // console.log(modal);
            // console.log(modalIndex);
            // modal.classList.remove("display-none")
            modal.click()
        }
        // modal.classList.add('display-inline')
    }, [modalIndex])
    const next = () => {
        if (modalIndex === questions.length - 1) {
            window.alert("Survey Recorded")
            console.log(answers);
        }
        setModalIndex((prev) => { return (prev + 1) })


    }
    const previous = () => {
        setModalIndex((prev) => { return (prev - 1) })
    }
    const changeModalState = (val, i) => {
        const newAnswers = [...answers]
        newAnswers[i] = val
        setAnswers(newAnswers)
    }
    const changeIndex = (x) => {
        setModalIndex(x)
    }
    return (

        <Card border="primary" className="pb-2 mb-4">
            <Card.Header as="h4">{header}</Card.Header>
            <Card.Img variant="top" src={image} className="p-4 image-card" />
            <Card.Body className="px-4">
                <Card.Title as="h5">{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button onClick={() => { setModalIndex(0) }} className="btn-primary btn" variant="primary" >
                    Give Survey
                </Button>
                {questions.map((q, index) => {
                    return (<div key={index} ><Modal title={`Question ${index + 1}`} question={q} index={index} next={next} previous={previous} state={answers[index]} changeModalState={changeModalState} changeIndex={changeIndex} /></div>)
                })}
            </Card.Body>
        </Card>

    )
}

export default CardElement
