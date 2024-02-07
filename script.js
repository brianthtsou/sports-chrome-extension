async function fetchData() {
  const res = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard"
  );
  const record = await res.json();
  console.log(record);
  document.getElementById("date").innerHTML = record.day.date;
  document.getElementById("homeTeam").innerHTML =
    record.events[0].competitions[0].competitors[0].team.displayName;
  document.getElementById("awayTeam").innerHTML =
    record.events[0].competitions[0].competitors[1].team.displayName;

  if (record.events[0].competitions[0].competitors[0].winner === true) {
    document.getElementById("winningTeam").innerHTML =
      record.events[0].competitions[0].competitors[0].team.displayName;
  } else {
    document.getElementById("winningTeam").innerHTML =
      record.events[0].competitions[0].competitors[1].team.displayName;
  }
}

fetchData();
