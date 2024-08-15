import { useState, useEffect } from 'react'

const StarshipSearch = (props) => {
  
  const [userSearch, setUserSearch] = useState('')

  useEffect(()=> {
    props.searchQuery(userSearch)
  }, [userSearch])

  const handleSubmit =(evt) => {
    evt.preventDefault()
    props.searchQuery(userSearch)
    setUserSearch('')
  }

  return (
      <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usersearch">Search Term:</label>
        <input
          id="usersearch"
          type="text"
          value={userSearch}
          onChange={(evt) => setUserSearch(evt.target.value)}
        />
      </form>
    </section>
  )
}

export default StarshipSearch