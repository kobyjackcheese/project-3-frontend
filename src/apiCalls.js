const URL = "http://localhost:4000"

export const leaderboardLoader = async () => {
    const response = await fetch(URL + "/leaderboard")
    const scores = await response.json()
    return scores
}