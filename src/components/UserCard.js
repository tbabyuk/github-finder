// styles
import "./UserCard.css"

import { Link } from "react-router-dom"


function UserCard({user}) {

  return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 gy-3 card-container">
            <Link to={`user/${user.login}`}>
                <div className="card mb-3 " style={{maxWidth: "280px", color: "black"}}>
                    <div className="row g-0">
                        <div className="col-md-5">
                        <img src={user.avatar_url} className="img-fluid rounded-start" alt="user" />
                        </div>
                        <div className="col-md-7 d-flex align-items-center">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <p className="card-title fw-bold">{user.login}</p>
                                <p href={user.url} className="card-link">View Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  )
}

export default UserCard