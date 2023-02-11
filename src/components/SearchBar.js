// import styles

import "./SearchBar.css"

import { useState } from 'react'

function SearchBar({setSearchQuery}) {

    const [query, setQuery] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(query)
        setQuery("")
    }


  return (

    <div className="container text-center mt-5 search-bar">
        <form onSubmit={handleSubmit}>
            <input
                placeholder="search github user" 
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                required            
            />
            <button type="submit">Search</button>
        </form>
    </div>
 
    )
}

export default SearchBar