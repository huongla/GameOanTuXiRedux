const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, I love you 3000!!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png" },
};

const GameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let cuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = cuocNgauNhien;
      return { ...state };
    }
    case "END_GAME":
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa nhau !!!";
          } else if (computer.ma === "bao") {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, I love you 3000!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua sml";
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, I love you 3000!!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua sml";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa nhau !!!";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua sml";
          } else if (computer.ma === "bao") {
            state.ketQua = "Hòa nhau !!!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, I love you 3000!!!";
          }
          break;
        default:
          state.soBanThang += 1;
          state.ketQua = "I'm iron man, I love you 3000!!!";
      }
      return { ...state };

    default:
      return { ...state };
  }
};
export default GameOanTuXiReducer;
