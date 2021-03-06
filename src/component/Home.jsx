import React, { Component } from "react";
import Danhsachghe from "./Danhsachghe";
import DSgheDangDat from "./DSgheDangDat";
// import GheItem from "./GheItem";

class Home extends Component {
  dsGhe = [
    { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3 ", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4 ", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5 ", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6 ", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8 ", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9 ", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10 ", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11 ", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12 ", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13 ", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14 ", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15 ", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16 ", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17 ", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18 ", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19 ", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20 ", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21 ", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22 ", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23 ", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24 ", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25 ", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26 ", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27 ", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28 ", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29 ", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30 ", Gia: 100, TrangThai: false },
    { SoGhe: 31, TenGhe: "số 31 ", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32 ", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33 ", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34 ", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35 ", Gia: 100, TrangThai: false },
  ];
  state = {
    selectedDsGhe: null,
    Ghe: [],
    totalItem: 0,
    // status: false,
    danhSachGheDaDat: [],
  };
  getDsGhe = (propstoChild) => {
    this.setState({
      selectedDsGhe: propstoChild,
    });
  };
  DatGhe = (propstoChild) => {
    console.log(propstoChild);
    let cloneGhe = [...this.state.Ghe];
    const index = cloneGhe.findIndex((item) => {
      return item.dsGhex.SoGhe == propstoChild.SoGhe;
    });
    if (index == -1) {
      const gheItem = {
        dsGhex: propstoChild,
      };
      cloneGhe.push(gheItem);
      //   gheItem.dsGhex.TrangThai = true;
    } else {
      cloneGhe.splice(index, 1);
    }
    this.setState(
      {
        Ghe: cloneGhe,
      },
      () => {
        console.log(this.state.Ghe);
      }
    );
  };
  ChonGhe = (propstoChild) => {
    let cloneGhe = [...this.state.Ghe];
    let Amount = cloneGhe.length;
    for (let item of cloneGhe) {
      for (let item1 of propstoChild) {
        if (item.dsGhex.SoGhe == item1.SoGhe) item1.TrangThai = true;
        // else item1.TrangThai = false;
      }
    }
    this.setState(
      {
        totalItem: Amount,
        danhSachGheDaDat: cloneGhe,
      },
      () => {
        console.log(propstoChild);
      }
    );
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "#ffcc00" }}>Đặt vé xe bus hãng Cyber Soft</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Danhsachghe
                getDsGhe={this.getDsGhe}
                DatGhe={this.DatGhe}
                ChonGhe={this.ChonGhe}
                data={this.dsGhe}
                danhSachGheDaDat={this.state.danhSachGheDaDat}
              />
            </div>
            <div className="col-6">
              <DSgheDangDat
                DatGhe={this.DatGhe}
                ChonGhe={this.ChonGhe}
                data={this.dsGhe}
                Ghe={this.state.Ghe}
                danhSachGheDaDat={this.state.danhSachGheDaDat}
                totalItem={this.state.totalItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
