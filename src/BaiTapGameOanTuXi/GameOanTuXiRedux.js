import React, { Component } from "react";
import Computer from "./Computer";
import "./GameOanTuXi.css";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";

export default class GameOanTuXiRedux extends Component {
  render() {
    return (
      <div>
        <div className="gameOanTuXi">
          <div className="row mt-4">
            <div className="col-3">
              <Player />
            </div>
            <div className="col-6 text-light">
              <KetQuaTroChoi />
            </div>
            <div className="col-3">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
