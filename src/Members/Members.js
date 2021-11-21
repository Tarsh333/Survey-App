import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useGlobalContext } from '../Context'
const Members = () => {
    const [members, setMembers] = useState([])
    const [input, setInput] = useState("")
    const searchSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch(`https://survey-app-backend-1234.herokuapp.com/member/query?name=${input}`,{
        headers: {
            'authorization': JSON.stringify(localStorage.getItem('token'))
        }})
        const result=await res.json()
        // console.log(result);
        setMembers(result.users)
    }
    const { following, changeFollowingArray } = useGlobalContext()
    const getMembers = async () => {
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/members", {
            headers: {
                'authorization': JSON.stringify(localStorage.getItem('token'))
            }
        })
        const result = await res.json()
        setMembers(result.members)
        // console.log(result);
    }
    const follow = async (id) => {
        // console.log(id);
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/follow", {
            headers: {
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
            method: 'POST',
            body: JSON.stringify({ id: id })
        })
        const result = await res.json()
        const newFollowing = [...following, id]
        changeFollowingArray(newFollowing)
        // console.log(result);
    }
    const unfollow = async (id) => {
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/unfollow", {
            headers: {
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
            method: 'POST',
            body: JSON.stringify({ id: id })
        })
        const result = await res.json()
        // console.log(following);
        const newFollowing = following.filter((k) => {
            if (k !== id) {
                return k
            }
        })
        changeFollowingArray(newFollowing)
        // console.log(result);
    }
    const changeFollowing = (id) => {
        if (following.includes(id)) {
            unfollow(id)
        } else {
            follow(id)
        }

    }
    useEffect(() => {
        getMembers()
    }, [])
    return (
        <div className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto members">
            <h1 align="center">Members</h1>
            <Form className="mb-5">
            <Form.Group controlId="formSearch">
                <Form.Control value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="Search for a member" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={searchSubmit}>
                Submit
            </Button>
            </Form>
            {members.length > 0 && <table> {members.map((k, i) => {
                return (<tr key={i}><td>{k.name}</td><td><Button onClick={() => { changeFollowing(k._id) }}>{following.includes(k._id) ? "Following" : "Follow"}</Button></td></tr>)
            })}</table>}
        </div>
    )
}

export default Members
