import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng:
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Tổng số bàn chơi:
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameOanTuXiReducer.ketQua,
    soBanThang: state.GameOanTuXiReducer.soBanThang,
    soBanChoi: state.GameOanTuXiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQuaTroChoi);
