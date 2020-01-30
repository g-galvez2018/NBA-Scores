const games = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const createTable = (games, targetTeam) => {
  const ulParent = document.createElement ('ul')
  for (let game of games) {        
    const gameLi= document.createElement('li');
    gameLi.innerHTML = getText(game);     
    gameLi.classList.add(isWinner (game, targetTeam) ? 'win' : 'loss');    
    ulParent.appendChild(gameLi);
  }  
  return ulParent;  
}

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
    const myTeam = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return myTeam.isWinner    
}

const getText = ({homeTeam, awayTeam}) =>{
  
  const { team: hTeam,points: hPoints} = homeTeam;
  const { team: aTeam,points: aPoints} = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  const scoreLine = `${aPoints} - ${hPoints}`
  
  return `${teamNames} ${scoreLine}`
}

const table = createTable(games, 'Golden State');

document.body.appendChild(table);

