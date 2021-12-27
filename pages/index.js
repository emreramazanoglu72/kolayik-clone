import React, { Component } from "react";
import { withRouter } from "next/router";

export default withRouter(
  class index extends Component {
    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.props.router.push("/app");
      } else {
        this.props.router.push("/login");
      }
    }
    render() {
      return (
        <div
          style={{
            height: "100vh",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <svg
              _ngcontent-hdg-c106
              viewBox="0 0 102 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg-back logo d-flex m-auto"
              width={50}
              height={50}
            >
              <path
                _ngcontent-hdg-c106
                d="M54 48L79 91.3026L29 91.3025L4 48.0013L29 4.70001L79 4.70001L29 91.3"
                stroke="#376BFB"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h5 className="text-center font-weight-bold">Yükleniyor</h5>
          </div>
        </div>
      );
    }
  }
);
