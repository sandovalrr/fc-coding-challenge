import { Standing, StandingTable } from '@f1/shared/models/standing'
import { Race, RaceTable } from '@f1/shared/models/race'

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
    `/api/driverstandings/1.json?${qs}`,
  ).then((result) => result.json())

  return response.MRData.StandingsTable.StandingsLists
}

const fetchWorldChampionBySeason = async (season: string): Promise<Standing> => {
  const response: FetchResult<StandingTable> = await fetch(
    `/api/${season}/driverstandings/1.json?`,
  ).then((result) => result.json())

  const [result] = response.MRData.StandingsTable.StandingsLists

  return result
}

const fetchRaceListBySeason = async (season: string): Promise<Race[]> => {
  const response: FetchResult<RaceTable> = await fetch(
    `/api/${season}/results/1.json?`,
  ).then((result) => result.json())

  return response.MRData.RaceTable.Races
}

export { fetchWorldChampions, fetchWorldChampionBySeason, fetchRaceListBySeason }
