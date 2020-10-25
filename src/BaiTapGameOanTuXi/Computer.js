import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top: -25px;}
      25% {top: 25px;}
      50% {top:-25px;}
      100% {top:0px;}
    }`;
    return (
      <div className="playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              left: "25%",
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotate(120deg)",
            }}
            className="mt-4"
            src={this.props.computer.gameImage}
            alt={this.props.computer.gameImage}
            width={35}
            height={35}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
          width={200}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.GameOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
