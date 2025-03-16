import axios from "axios"

const BASE_URL = 'https://api.github.com/users/viniciusOlro'
const defaultImage = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400"

export async function getReposLength() {
  try {
    const { data } = await axios.get(BASE_URL)
    return data.public_repos
  } catch (error) {
    console.error(error)
  }
}

export async function getAllProjects(page = 1, perPage = 5) {
  try {
    const { data } = await axios.get(`${BASE_URL}/repos`, {
      params: {
        page,
        per_page: perPage
      },
      headers: { Accept: "application/vnd.github.mercy-preview+json" }
    })
    return data.map(repo => ({
      name: repo.name,
      description: repo.description || "Sem descrição",
      repoUrl: repo.html_url,
      tags: repo.topics || [],
      language: repo.language || "Desconhecida",
      homepage: repo.homepage || defaultImage
    }));
  } catch (error) {
    console.error(error)
  }
}