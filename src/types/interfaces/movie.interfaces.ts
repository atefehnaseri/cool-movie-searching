export interface IMovie {
  poster_path: string | null
  backdrop_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  video: boolean
  popularity: number
  vote_average: number
  vote_count: number
}
export interface IMovieListResponse {
  page: number
  results: IMovie[] | []
  total_results: number
  total_pages: number
}