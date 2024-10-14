import React from 'react'

function Search({search,setSearch}) {
  return (
    <>
      <form  className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input type="text" placeholder='search' role='searchbox'  id='search' value={search} onChange={(e) => setSearch(e.target.value)}/>


      </form>
    </>
  )
}

export default Search