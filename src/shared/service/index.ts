import { Standing, StandingTable } from '@f1/shared/models/standing'

type FetchResult<T extends object> = {
  MRData: Record<string, T>
}

const getQueryString = (params: Record<string, string | number>) => {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join('&')
}

const fetchWorldChampions = async ({ limit = 11, offset = 55 } = {}): Promise<Standing[]> => {
  const qs = getQueryString({ limit, offset })
  const response: FetchResult<StandingTable> = await fetch(
    `api/driverstandings/1.json?${qs}`,
  ).then((result) => result.json())

  return response.MRData.StandingsTable.StandingsLists
}

export { fetchWorldChampions }
