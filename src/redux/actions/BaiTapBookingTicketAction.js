import { CHON_GHE, HUY_GHE } from "../constants/BaiTapBookingTicketConst";

export const chonGheAction = (ghe) => {
  return {
    type: CHON_GHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
