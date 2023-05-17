function Leaderboard({leaderboardInfo}) {
    console.log(leaderboardInfo)
    return leaderboardInfo.map((leaderboardInfo, index) => (
        <div key={index}>
          <h1>Name: {leaderboardInfo.name}</h1>
          <h1>Score: {leaderboardInfo.score}</h1>
          <hr></hr>
        </div>
      ));
  }
  
  export default Leaderboard;