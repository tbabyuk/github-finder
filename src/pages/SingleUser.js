// import styles
import "./SingleUser.css"


import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import UserProfile from "../components/UserProfile"

function SingleUser() {

  const {nickname} = useParams()

  const [user, setUser] = useState({})


  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/${nickname}`);
            const data = await res.json()
            setUser(data)
        } catch(error) {
            console.log(error.message)
        }
    }
    fetchUsers()
}, [user])


  return (
    <div className="container text-center mt-5 p-5 single-user">
      <Link to="/">Back to Users</Link>
      {user && 
          <UserProfile user={user} /> 
      }      
    </div>
)
}

export default SingleUser