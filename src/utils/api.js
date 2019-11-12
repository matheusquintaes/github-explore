
const id = "a9206779f07a68f9eace"
const sec = "32370e917f9f72f0e3295dbbf121f43f01163200"
const params = `?client_id=${id}&client_secret=${sec}`

export function fetchPopularRepos (language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars${params}&order=desc&type=Repositories`)

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message)
      }
      return data.items
    })
}