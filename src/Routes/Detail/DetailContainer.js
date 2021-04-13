import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
  state = {
    detail: null,
    isLoading: true,
    error: false
  };

  render() {
    const { detail, isLoading, error } = this.state;
    return (
      <DetailPresenter detail={detail} isLoading={isLoading} error={error} />
    );
  }
}

export default DetailContainer;
