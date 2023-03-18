// styles
import "./UserCard.css"

import { Link } from "react-router-dom"


function UserCard({user}) {

  return (
        <Link to={`user/${user.login}`}>
            <div className="user-card">
                <div className="card-image">
                    <img src={user.avatar_url} className="" alt="user" />
                </div>
                <div className="card-info">
                    <p className="">{user.login}</p>
                    <p href={user.url} className="">View Profile</p>
                </div>
            </div>
        </Link>
  )
}

export default UserCard