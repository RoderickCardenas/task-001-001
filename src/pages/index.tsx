import SearchBar from './components/SearchBar'
import ResultsContainer from './components/ResultsContainer'
import Loader from './components/Loader'
import { Fragment, useState } from 'react'
import { SearchResponseData } from '@/types'

export default function Home() {
  const [data, setData] = useState<SearchResponseData>({
    result: { duration: 0, hits: [], links: { next: '', prev: '' }, total: 0 },
  })
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchHosts = async (q: string, cursor?: string) => {
    try {
      setQuery(q)
      setLoading(true)

      const url = `/api/getHosts?q=${encodeURIComponent(q)}${
        cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''
      }`

      const response = await fetch(url)

      if (!response.ok) {
        console.error('Failed to fetch hosts:', response.statusText)
        return
      }

      const data = await response.json()

      setData(data)
    } catch (error) {
      console.error('Error fetching hosts:', error)
    } finally {
      setLoading(false)
    }
  }

  console.log(data, query)

  return (
    <Fragment>
      <SearchBar onSearch={fetchHosts} />
      <div className="container mx-auto flex">
        <div className="flex flex-col flex-1 pt-20 items-center">
          {loading ? (
            <Loader />
          ) : (
            <ResultsContainer
              data={data}
              query={query}
              onPageNav={fetchHosts}
              next={data.result.links.next}
              prev={data.result.links.prev}
            />
          )}
        </div>
      </div>
    </Fragment>
  )
}
