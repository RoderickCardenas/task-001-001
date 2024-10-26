import { SearchResponseData } from '@/types'

interface ResultsContainerProps {
  data: SearchResponseData
  onPageNav(query: string, cursor?: string): void
  query: string
  next: string
  prev: string
}

export default function ResultsContainer({
  data,
  onPageNav,
  query,
  next,
  prev,
}: ResultsContainerProps) {
  const isDisabled = (str: string) => str === ''

  const btnStyle = (str: string) => {
    return (
      (isDisabled(str) ? 'bg-blue-200 ' : 'bg-blue-600 ') +
      'py-1 px-5 text-white focus:outline-none rounded mx-10'
    )
  }

  const handlePageNav = (cursor: string) => onPageNav(query, cursor)

  return (
    <div>
      <h1 className="m-10">Results</h1>
      <button
        className={btnStyle(prev)}
        disabled={isDisabled(prev)}
        onClick={() => handlePageNav(prev)}
      >
        Previous
      </button>
      <button
        className={btnStyle(next)}
        disabled={isDisabled(next)}
        onClick={() => handlePageNav(next)}
      >
        Next
      </button>
    </div>
  )
}
