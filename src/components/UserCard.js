// styles
import "./UserCard.css"

import { Link } from "react-router-dom"


function UserCard({user}) {


    // const handleClick = (login) => {
    //     console.log("card clicked")
    //     console.log(login)
    // }

  return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to={`user/${user.login}`}>
                <div className="card mb-3" style={{maxWidth: "280px"}}>
                    <div className="row g-0">
                        <div className="col-md-5">
                        <img src={user.avatar_url} className="img-fluid rounded-start" alt="user" />
                        </div>
                        <div className="col-md-7 d-flex align-items-center">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <p className="card-title fw-bold">{user.login}</p>
                                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
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