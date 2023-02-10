// styles
import "./UserCard.css"

import React from 'react'

function UserCard({user}) {
  return (
        <div className="card mb-3" style={{maxWidth: "280px"}}>
            <div className="row g-0">
                <div className="col-md-5">
                <img src={user.avatar_url} className="img-fluid rounded-start" alt="user photo" />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        <a href={user.url} className="card-link">Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserCard