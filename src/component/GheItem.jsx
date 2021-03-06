import React, { Component } from "react";
import classNames from "classnames";
class GheItem extends Component {
  state = {
    isBooking: false,
    TrangThai: false,
  };
  ShowGhe = () => {
    this.props.DatGhe(this.props.data);
    this.setState({
      isBooking: !this.state.isBooking,
    });
  };
  render() {
    return (
      <div>
        <button
          className={classNames(
            "btn",
            "btn-lg",
            "mb-3",
            { "btn-secondary": !this.state.isBooking },
            { "btn-success": this.state.isBooking },
            { "btn-danger": this.props.data.TrangThai }
          )}
          onClick={this.ShowGhe}
          disabled={this.props.data.TrangThai}
        >
          {this.props.data.TenGhe}
        </button>
      </div>
    );
  }
}

export default GheItem;
