

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
        <div className="row">
            <div className="col-7 mx-auto">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Recipient's username" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        required
                    />
                    <button className="btn btn-primary" type="submit" id="button-addon2">Button</button>
                    </div>
                </form>
            </div> 
        </div>
    </div>
 
    )
}

export default SearchBar