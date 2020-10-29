import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BaiTapBookingTicketAction";

class ThongTinDatGhe extends Component {
  renderChonGhe = () => {
    return this.props.danhSachGheDangDat.map((gheChon, index) => {
      return (
        <tr key={index}>
          <td style={{ fontSize: "20px", color: "orange" }}>{gheChon.soGhe}</td>
          <td style={{ fontSize: "20px", color: "orange" }}>
            {gheChon.gia.toLocaleString()}
          </td>
          <td>
            <button
              style={{ fontSize: "20px", color: "red" }}
              onClick={() => {
                this.props.dispatch(huyGheAction(gheChon.soGhe));
              }}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="mt-3 d-flex align-items-start flex-column">
          <div className="my-2">
            <button className="gheDuocChon"></button>
            <span className="text-light ml-2" style={{ fontSize: "20px" }}>
              Ghế đã đặt
            </span>
          </div>

          <div className="my-2">
            <button className="gheDangChon"></button>
            <span className="text-light ml-2" style={{ fontSize: "20px" }}>
              Ghế đang đặt
            </span>
          </div>

          <div className="my-2">
            <button className="ghe" style={{ marginLeft: "0" }}></button>
            <span className="text-light ml-2" style={{ fontSize: "20px" }}>
              Ghế chưa đặt
            </span>
          </div>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light">
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>{this.renderChonGhe()}</tbody>
            <tfoot>
              <td style={{ fontSize: "20px", color: "green" }}>Tổng tiền</td>
              <td colSpan="2" style={{ fontSize: "20px", color: "red" }}>
                {this.props.danhSachGheDangDat
                  .reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapBookingTicket.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
