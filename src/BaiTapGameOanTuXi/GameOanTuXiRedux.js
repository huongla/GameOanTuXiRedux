/**
 *giao diện - done
 * xác định state - done
 */
import React, { Component } from "react";
import Computer from "./Computer";
import "./GameOanTuXi.css";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import { connect } from "react-redux";

class GameOanTuXiRedux extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-3">
            <Player />
          </div>
          <div className="col-6">
            <KetQuaTroChoi />
            <button
              className="btn btn-success p-3 mt-4 display-4"
              onClick={() => this.props.playGame()}
            >
              Play game
            </button>
          </div>
          <div className="col-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      let randomComputerItem = setInterval(() => {
        const action = {
          type: "RANDOM",
        };
        dispatch(action);
        n++;
        if (n > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameOanTuXiRedux);
