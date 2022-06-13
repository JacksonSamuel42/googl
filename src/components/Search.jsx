import React from 'react'
import Links from './Links'
import {useDebounce} from 'use-debounce'

import {useResultContext} from '../context/ResultContextProvider'
const Search = () => {
  const [text, setText] = React.useState('google')
  const {setSearchTerm} = useResultContext()
  const [debounceValue] = useDebounce(text, 300)

  React.useEffect(() => {
    if(debounceValue) setSearchTerm(debounceValue)
  }, [debounceValue])

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input 
        value={text}
        onChange={({target}) => setText(target.value)}
        type='text'
        placeholder='Search Googl or type URL'
        className='sm:2-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black houver:shadow-lg'
      />
      {text && (
        <button
          type='button'
          className='absolute top-1.5 right-5 text-2xl text-gray-500'
          onClick={() => setText('')}
        >
          x
        </button>
      )}
      <Links/>
    </div>
  )
}

export default Search