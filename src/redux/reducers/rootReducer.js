import { combineReducers } from "redux";
import GameOanTuXiReducer from "./GameOanTuXiReducer";
import BaiTapBookingTicket from "./BaiTapBookingTicketReducer";

export const rootReducer = combineReducers({
  GameOanTuXiReducer,
  BaiTapBookingTicket,
});
