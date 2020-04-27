interface Location {
  lat: string
  long: string
  locality: string
  country: string
}

interface Circuit {
  circuitId: string
  url: string
  circuitName: string
  Location: Location
}

interface Driver {
  driverId: string
  code: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
  permanentNumber: string
}

interface Constructor {
  constructorId: string
  url: string
  name: string
  nationality: string
}

interface Time {
  millis: string
  time: string
}

interface Time2 {
  time: string
}

interface AverageSpeed {
  units: string
  speed: string
}

interface FastestLap {
  rank: string
  lap: string
  Time: Time2
  AverageSpeed: AverageSpeed
}

interface Result {
  number: string
  position: string
  positionText: string
  points: string
  Driver: Driver
  Constructor: Constructor
  grid: string
  laps: string
  status: string
  Time: Time
  FastestLap: FastestLap
}

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: string
  time: string
  Results: Result[]
}

export interface RaceTable {
  season: string
  position: string
  Races: Race[]
}
