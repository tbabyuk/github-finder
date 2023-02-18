// import styles
import "./UserProfilePage.css"


import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import UserProfileCard from "../../components/UserProfileCard"

function UserProfilePage() {

  const {nickname} = useParams()

  const [user, setUser] = useState({})


  useEffect(() => {
    console.log("useEffect fired in UserProfilePage")
    const fetchUsers = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/${nickname}`);
            const data = await res.json()
            console.log(data)
            setUser(data)
        } catch(error) {
            console.log(error.message)
        }
    }
    fetchUsers()
}, [])



return (
  <div className="container text-center mt-5">
    <div className="row">
      <div className="col">
        {user && <UserProfileCard user={user} />}
      </div>
    </div>
  </div>
  )
}

export default UserProfilePage