import SearchBar from './components/SearchBar'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <SearchBar />
      <div className="container mx-auto flex">
        <div className="flex flex-col flex-1 pt-20">
          <h1>Results</h1>
        </div>
      </div>
    </Fragment>
  )
}
