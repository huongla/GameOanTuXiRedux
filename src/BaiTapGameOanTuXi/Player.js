import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderDSGame = () => {
    let { objectDatCuoc } = this.props;

    return Object.values(objectDatCuoc).map((obj, index) => {
      let border = {};
      if (obj.betting) {
        border = { border: "3px solid orange" };
      }
      return (
        <div className="col-4" key={index}>
          <button
            style={border}
            className="btnItem"
            onClick={() => this.props.bet(obj.id)}
          >
            <img
              width={35}
              height={35}
              src={obj.gameImage}
              alt={obj.gameImage}
            />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            src={
              Object.values(this.props.objectDatCuoc).find(
                (item) => item.betting === true
              ).gameImage
            }
            alt={
              Object.values(this.props.objectDatCuoc).find(
                (item) => item.betting === true
              ).gameImage
            }
            width={35}
            height={35}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
          width={200}
        />
        <div className="row">{this.renderDSGame()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    objectDatCuoc: state.GameOanTuXiReducer.objectDatCuoc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bet: (bettingId) => {
      const action = {
        type: "BET",
        bettingId,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
