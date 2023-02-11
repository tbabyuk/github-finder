

import React from 'react'

function UserProfile({user}) {
  return (
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
  )
}

export default UserProfile