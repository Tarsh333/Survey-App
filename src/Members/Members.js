import React, { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap'
import { useGlobalContext } from '../Context'
const Members = () => {
    const [members, setMembers] = useState([])
    const {following,changeFollowingArray}=useGlobalContext()
    const getMembers=async()=>{
        const res=await fetch("https://survey-app-backend-1234.herokuapp.com/members",{
            headers:{
                'authorization': JSON.stringify(localStorage.getItem('token'))
            }
        })
        const result=await res.json()
        setMembers(result.members)
        // console.log(result);
    }
    const follow=async(id)=>{
        // console.log(id);
        const res=await fetch("https://survey-app-backend-1234.herokuapp.com/follow",{
            headers:{
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
            method:'POST',
            body:JSON.stringify({id:id})
        })
        const result=await res.json()
        const newFollowing=[...following,id]
        changeFollowingArray(newFollowing)
        // console.log(result);
    }
    const unfollow=async(id)=>{
        const res=await fetch("https://survey-app-backend-1234.herokuapp.com/unfollow",{
            headers:{
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
            method:'POST',
            body:JSON.stringify({id:id})
        })
        const result=await res.json()
        // console.log(following);
        const newFollowing=following.filter((k)=>{
            if (k!==id) {
                return k
            }
        })
        changeFollowingArray(newFollowing)
        // console.log(result);
    }
    const changeFollowing=(id)=>{
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
            {members.length>0 && members.map((k,i)=>{
                console.log(following.includes(k._id));
                return (<div key={i}>{k.name}<Button onClick={()=>{changeFollowing(k._id)}}>{following.includes(k._id)?"Following":"Follow"}</Button></div>)
            })}
        </div>
    )
}

export default Members
