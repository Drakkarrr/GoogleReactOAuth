import React, { useEffect, useState } from 'react'

import MasonryLayout from './MasonryLayout'
import { client } from '../services/client'
import { feedQuery, searchQuery } from '../utils/helpers/data'
import Spinner from './Spinner'

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState<any | string>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true)
      const query = searchQuery(searchTerm.toLowerCase())
      client.fetch(query).then(data => {
        setPins(data)
        setLoading(false)
      })
    } else {
      client.fetch(feedQuery).then(data => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [searchTerm])

  return (
    <div>
      {loading && <Spinner message='Searching pins' />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== '' && !loading && (
        <div className='mt-10 text-center text-xl '>No Pins Found!</div>
      )}
    </div>
  )
}

export default Search
