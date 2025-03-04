const API_KEY = "40480dc0d6cf71c830fd0310844d9795"
const BASE_URL = "https://api.themoviedb.org/3"

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
} 

export const searchMovie = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
}