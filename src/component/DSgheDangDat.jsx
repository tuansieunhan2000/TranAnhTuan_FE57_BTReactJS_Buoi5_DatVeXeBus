import React, { Component } from "react";

class DSgheDangDat extends Component {
  ShowGhe = () => {
    this.props.ChonGhe(this.props.data);
  };
  renderDsGhe = () => {
    return this.props.danhSachGheDaDat.map((item) => {
      return (
        <p>
          Ghế: {item.dsGhex.TenGhe} ${item.dsGhex.Gia}
        </p>
      );
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "#ffcc00" }}>
          Danh sách ghế đã đặt: {this.props.totalItem}
        </h1>
        {this.renderDsGhe()}
      </div>
    );
  }
}

export default DSgheDangDat;
