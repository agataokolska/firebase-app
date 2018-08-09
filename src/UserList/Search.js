import React from 'react'

const Search = (props)=> (
    <div>
        <input
        type="text"
        value={props.searchPhrase}
        onChange={props.onSearchPhraseChanged}

        />
    </div>

)

export default Search