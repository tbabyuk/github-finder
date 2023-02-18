// import styles
import "./UsersListPage.css"

import SearchBar from "../../components/SearchBar"
import UserCard from "../../components/UserCard"
import { useState } from "react"
import { useFetchUsers } from "../../hooks/useFetchUsers"


function UsersListPage() {

    const [searchQuery, setSearchQuery] = useState("")

    const pastQuery = localStorage.getItem("query")

    const { data, isPending, error} = useFetchUsers(searchQuery ? `https://api.github.com/search/users?q=${searchQuery}` : `https://api.github.com/search/users?q=${pastQuery}` )



  return (
    <>
        <SearchBar setSearchQuery={setSearchQuery} />

        <div className="container text-center mt-5">
            <div className="row">
                {isPending && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && 
                    data.map((user) => {
                        return <UserCard key={user.id} user={user}/>
                    })  
                } 
            </div>
        </div>
    </>
  )
}

export default UsersListPage