import { NextApiRequest, NextApiResponse } from 'next'
import getHosts from './getHosts'
import { SearchResponseData } from '@/types'

class MockResponse {
  private _status: number = 200
  private _json: unknown

  status(statusCode: number) {
    this._status = statusCode
    return this
  }

  json(data: SearchResponseData) {
    this._json = data
    return this
  }

  getStatus() {
    return this._status
  }

  getJson() {
    return this._json
  }
}

describe('getHosts', () => {
  it('should fetch 50 results when query = services.service_name: HTTP and fetch next 50 with the next cursor', async () => {
    const req = {
      query: { q: 'services.service_name: HTTP', cursor: '' },
    } as unknown as NextApiRequest

    const res = new MockResponse() as unknown as NextApiResponse

    await getHosts(req, res)

    const resJson = (
      res as unknown as MockResponse
    ).getJson() as SearchResponseData

    expect(resJson.result.hits.length).toBe(50)

    const nextCursor = resJson.result.links.next

    expect(nextCursor).toBeDefined()

    const nextReq = {
      query: { q: 'services.service_name: HTTP', cursor: nextCursor },
    } as unknown as NextApiRequest

    const nextRes = new MockResponse() as unknown as NextApiResponse

    await getHosts(nextReq, nextRes)

    const nextResJson = (
      nextRes as unknown as MockResponse
    ).getJson() as SearchResponseData

    expect(nextResJson.result.hits.length).toBe(50)
    expect(nextResJson.result.links.prev).toBeDefined()
    expect(nextResJson.result.links.prev).not.toBe('')
  })
})
