const stateDefault = {
  objectDatCuoc: {
    0: {
      id: "bao",
      gameImage: "./img/gameOanTuXi/bao.png",
      betting: true,
    },
    1: {
      id: "bua",
      gameImage: "./img/gameOanTuXi/bua.png",
      betting: false,
    },
    2: {
      id: "keo",
      gameImage: "./img/gameOanTuXi/keo.png",
      betting: false,
    },
  },
  computer: {
    id: "keo",
    gameImage: "./img/gameOanTuXi/keo.png",
  },
  result: "I'm iron man, I love you 3000!!!",
  score: 0,
  round: 0,
};

const GameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "RANDOM": {
      let randomNumber = Math.floor(Math.random() * 3);

      let randomComputerBeat = state.objectDatCuoc[randomNumber];

      state.computer = randomComputerBeat;

      return { ...state };
    }

    case "BET": {
      const betId = action.bettingId;
      let objectDatCuocUpdate = { ...state.objectDatCuoc };

      objectDatCuocUpdate = Object.values(objectDatCuocUpdate).map(
        (obj, index) => {
          if (obj.id === betId) {
            return { ...obj, betting: true };
          } else {
            return { ...obj, betting: false };
          }
        }
      );
      state.objectDatCuoc = objectDatCuocUpdate;
      return { ...state };
    }

    case "END_GAME": {
      state.round += 1;
      let player = Object.values(state.objectDatCuoc).find(
        (item) => item.betting === true
      );
      let computer = state.computer;
      console.log("player", player);
      console.log("computer", computer);
      switch (player.id) {
        case "bao":
          if (computer.id === "bua") {
            state.score += 1;
            state.result = "I'm iron man, I love you 3000!!!";
          } else if ((computer.id = "keo")) {
            state.result = "Bạn thua sml";
          } else if (computer.id === "bao") {
            state.result = "Hòa nhau";
          }
          break;
        case "bua":
          if (computer.id === "keo") {
            state.score += 1;
            state.result = "I'm iron man, I love you 3000!!!";
          } else if (computer.id === "bao") {
            state.result = "Bạn thua sml";
          } else if (computer.id === "bua") {
            state.result = "Hòa nhau";
          }
          break;
        case "keo":
          if (computer.id === "bao") {
            state.score += 1;
            state.result = "I'm iron man, I love you 3000!!!";
          } else if (computer.id === "bua") {
            state.result = "Bạn thua sml";
          } else if (computer.id === "keo") {
            state.result = "Hòa nhau";
          }
          break;
        default:
          state.score += 1;
          state.result = "I'm iron man, I love you 3000!!!";
      }
    }

    default:
      return { ...state };
  }
};
export default GameOanTuXiReducer;
