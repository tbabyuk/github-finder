// import styles
import "./UsersListPage.css"


import UserCard from "../../components/UserCard"
import { useEffect, useState } from "react"
import SearchBar from "../../components/SearchBar"
import { useFetch } from "../../hooks/useFetch"


function UsersListPage() {

    const [searchQuery, setSearchQuery] = useState("")

    const pastQuery = localStorage.getItem("query")



    const { data, isPending, error} = useFetch(searchQuery ? `https://api.github.com/search/users?q=${searchQuery}` : `https://api.github.com/search/users?q=${pastQuery}` )



  return (
    <>
        <SearchBar setSearchQuery={setSearchQuery} />

        <div className="container text-center mt-5">
            <div className="row">
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