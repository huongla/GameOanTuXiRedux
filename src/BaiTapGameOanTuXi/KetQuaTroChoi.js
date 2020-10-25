import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.result}</div>
        <div className="display-4 text-success">
          Số bàn thắng:
          <span className="text-warning">{this.props.score}</span>
        </div>
        <div className="display-4 text-success">
          Tổng số bàn chơi:
          <span className="text-warning">{this.props.round}</span>
        </div>
        <button
          className="btn btn-success p-3 mt-4 display-4"
          onClick={() => {
            this.props.playGame();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.GameOanTuXiReducer.result,
    score: state.GameOanTuXiReducer.score,
    round: state.GameOanTuXiReducer.round,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({ type: "RANDOM" });
        n++;
        if (n > 2) {
          clearInterval(randomComputerItem);
          dispatch({ type: "END_GAME" });
        }
      }, 100);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
