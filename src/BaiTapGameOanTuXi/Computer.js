import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}(
      0% {top: -30px;}
      25% {top: 30px;}
      50% {top:-30px;}
      100% {top:0px;}
    )`;

    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              left: "30%",
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotate(120deg)",
            }}
            className="mt-3"
            width={50}
            height={50}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
          style={{ width: 200, height: 200 }}
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
