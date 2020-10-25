import { combineReducers } from "redux";
import GameOanTuXiReducer from "./GameOanTuXiReducer";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";

export const rootReducer = combineReducers({
  GameOanTuXiReducer,
  BaiTapDatVeReducer,
});
