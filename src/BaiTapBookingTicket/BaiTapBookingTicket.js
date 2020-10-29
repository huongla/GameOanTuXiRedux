import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGheData.json";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="mainBackground">
        <div className="backgroundCover"></div>
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-8 text-center">
              <div className="text-warning" style={{ fontSize: "35px" }}>
                ĐẶT VÉ XEM PHIM CYBERLEARN.VN
              </div>
              <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                Màn hình
              </div>
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="screen"></div>
                <div> {this.renderHangGhe()}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="text-light" style={{ fontSize: "30px" }}>
                DANH SÁCH GHẾ BẠN CHỌN
              </div>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
