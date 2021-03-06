import React, { Component } from "react";
import GheItem from "./GheItem";

class Danhsachghe extends Component {
  ChonGhe = () => {
    this.props.ChonGhe(this.props.data);
  };
  renderDsGhe = () => {
    const dsghe = this.props.data.map((item) => {
      return (
        <div className="col-3" key="item.SoGhe">
          <GheItem
            getDsGhe={this.props.getDsGhe}
            data={item}
            DatGhe={this.props.DatGhe}
            danhSachGheDaDat={this.props.danhSachGheDaDat}
          />
        </div>
      );
    });
    return dsghe;
  };
  render() {
    return (
      <div>
        <button className="btn btn-success btn-lg mb-4" disabled={true}>
          Tài xế
        </button>
        <div className="row">{this.renderDsGhe()}</div>
        <button className="btn btn-danger btn-lg mt-3" onClick={this.ChonGhe}>
          Chọn ghế
        </button>
      </div>
    );
  }
}

export default Danhsachghe;
