import React from 'react'

const ResultContext = React.createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState('')

    const getResults = async (type) => {
        setIsLoading(true)
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })

        const data = await response.json()

        if(type.includes('/news')){
            setResults(data.entries)
        }else if(type.includes('/image')){
            setResults(data.image_results)
        }else{
            setResults(data.results)
        }

        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => React.useContext(ResultContext)