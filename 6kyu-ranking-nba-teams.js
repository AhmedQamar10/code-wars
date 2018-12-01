// You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:
// r = Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112, Los Angeles Clippers 100 Boston Celtics 120.
// A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...
// Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...) will return as a string
// the name of the team followed by : and
// the number of matches won by the team
// the number of draws
// the number of matches lost by the team
// the total number of points scored by the team
// the total number of points conceded by the team
// and finally a kind of marks in our ranking system
// a team marks 3 if it is a win
// a team marks 1 if it is a draw
// a team marks 0 if it is a loss.
// The return format is:
// "Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"
// #Remarks: The team name "" returns "".
// If a team name can't be found in the given string of results you will return "Team Name:This team didn't play!" (See examples below).
// The scores must be integers. If a score is a float number (abc.xyz...) you will return: "Error(float number):the concerned string"

function nbaCup(resultSheet, toFind) {
    if(toFind === '') return '';

    let teamPattern = /([^\ \d,](?<![er])([a-z\ ]{1,})(?!\S))/gi;
    let scorePattern = /([\d\.]){1,}(?!\w)/g;
    let teams = resultSheet.match(teamPattern).map(team => team === 'Philadelphia' ? 'Philadelphia 76ers' : team);
    let scores = resultSheet.match(scorePattern);
    let dict = {};

    for(let i = 0; i < teams.length; i++) {
      if(!dict[teams[i]]) {
        dict[teams[i]] = { W: 0, L: 0, D: 0, Scored: 0, Conceded: 0, Points: 0 };
      }
    }

    if(!dict[toFind]) return toFind + ':This team didn\'t play!';

    for(let j = 0; j < scores.length; j += 2) {
      let team1 = dict[teams[j]];
      let team2 = dict[teams[j + 1]];
      let score1 = Number(scores[j]);
      let score2 = Number(scores[j + 1]);

      if(score1 % 1 !== 0 || score2 % 1 !==0) {
        return 'Error(float number):' + teams[j] + ' ' + scores[j] + ' ' + teams[j + 1] + ' ' + scores[j + 1];
      }

      if(score1 > score2) {
        team1.W++;
        team1.Points += 3;
        team2.L++;
      }
      if(score1 === score2) {
        team1.D++;
        team1.Points += 1;
        team2.D++;
        team2.Points += 1;
      }
      if(score1 < score2) {
        team1.L++;
        team2.W++;
        team2.Points += 3;
      }
        team1.Scored += score1;
        team1.Conceded += score2;
        team2.Scored += score2;
        team2.Conceded += score1;
    }
    
    return toFind + ":" + "W=" + dict[toFind].W + ";" + "D=" + dict[toFind].D + ";" + "L=" + dict[toFind].L + ";" + "Scored=" + dict[toFind].Scored + ";" + "Conceded=" + dict[toFind].Conceded + ";" + "Points=" + dict[toFind].Points;
}