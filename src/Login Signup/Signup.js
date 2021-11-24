import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useGlobalContext } from '../Context'

const Signup = () => {
    const {changeLogin}=useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ name: '', password: '', email: '', address: '', phone: '',userLevel:0 })
    // useEffect(() => {
    //     console.log(form);
    // }, [form])
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/signup", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({...form})
        })
        const result = await res.json()
        console.log(result);
        if (!result.id) {
            window.alert(result.message)
        }
        else {
            localStorage.setItem('token', result?.token)
            localStorage.setItem('following', JSON.stringify(result?.following))
            changeLogin(true)
        }
        setLoading(false)
    }
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    return (
        <div className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto">
            <h1 align="center" className="my-5">Signup</h1>

            <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationName">
                    <Form.Label >Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required={true} onChange={formControl} name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required={true} onChange={formControl} name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationPhone">
                    <Form.Label >Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" required={true} onChange={formControl} name="phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationAddress">
                    <Form.Label >House Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" required={true} onChange={formControl} name="address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationPassword" >
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required={true} onChange={formControl} name="password" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading?"Loading...":"Submit"}
                </Button>
            </Form>
            <div className="mt-4"></div>  <Link to="/login">Already Have an account? Login</Link>
        </div>
    )
}

export default Signup
