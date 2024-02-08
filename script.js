function addRow(table) {
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
}

async function fetchData() {
  const res = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard"
  );
  const record = await res.json();
  console.log(record);
  let num_of_games = record.events.length;
  console.log(num_of_games);

  const table = document.getElementById("scores-table");

  for (let i = 0; i < num_of_games; i++) {
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    c1.innerHTML = record.day.date;
    c2.innerHTML =
      record.events[i].competitions[0].competitors[0].team.displayName;
    c3.innerHTML =
      record.events[i].competitions[0].competitors[1].team.displayName;
    c4.innerHTML =
      `<a href="${record.events[i].links[1].href}">` +
      `${record.events[i].competitions[0].competitors[0].score} - ` +
      `${record.events[i].competitions[0].competitors[1].score}` +
      "</a>";

    if (record.events[i].competitions[0].status.type.completed !== true) {
      c5.innerHTML = " - ";
    } else if (
      record.events[i].competitions[0].competitors[0].winner === true
    ) {
      c5.innerHTML =
        record.events[i].competitions[0].competitors[0].team.displayName;
    } else {
      c5.innerHTML =
        record.events[i].competitions[0].competitors[1].team.displayName;
    }
  }
}

fetchData();
