import { Hits } from '@/types'

interface ResultProps {
  hit: Hits
}

export default function Result({ hit }: ResultProps) {
  const { ip, services } = hit

  return (
    <div className="Result">
      <h2>{ip}</h2>
      <h3>No of protocols: {services.length}</h3>
    </div>
  )
}
