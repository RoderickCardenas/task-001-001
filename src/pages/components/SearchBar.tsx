import Image from 'next/image'
import { useState } from 'react'

interface SearchBarProps {
  onSearch(query: string): void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <nav className="fixed w-full flex flex-col bg-gray-200">
      <div className="flex flex-row">
        <Image
          className="ml-auto p-5"
          src="/images/censys-2022.svg"
          width={215}
          height={45}
          alt="censys-logo"
          priority
        />
        <div className="py-5 mr-auto my-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-1 border-gray-300 focus:outline-none"
            placeholder="Search Hosts..."
          />
          <button
            onClick={handleSearch}
            className="py-1 px-5 bg-blue-600 text-white focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default SearchBar
