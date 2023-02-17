// import styles
import "./UserProfilePage.css"


import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

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
    <div className="container text-center mt-5 p-5 single-user">
      {user && (
        <>
          <Link to="/">Back to Users</Link>
          <div className="card mb-3" style={{maxWidth: "540px"}}>
              <div className="row g-0">
                <div className="col-md-4">
                    <img src={user.avatar_url} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                        <p className="card-text">{user.bio}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
          </div>
        </>

      )}
          
    
    </div>
)
}

export default UserProfilePage