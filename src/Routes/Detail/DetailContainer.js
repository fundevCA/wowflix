import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieAPI, tvAPI } from "../../Components/API";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null,
      isLoading: true,
      error: "",
      isMovie: props.match.path.includes("/movie/")
    };
  }

  async componentDidMount() {
    let {
      match: {
        params: { id }
      }
    } = this.props;

    if (isNaN(parseInt(id))) {
      this.props.history.push("/");
    } else {
      const { isMovie } = this.state;
      id = parseInt(id);
      let detail = null;
      try {
        if (isMovie) {
          ({ data: detail } = await movieAPI.detail(id));
        } else {
          ({ data: detail } = await tvAPI.detail(id));
        }
        this.setState({ detail });
      } catch {
        this.setState({ error: "Could not find the Detail" });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { detail, isLoading, error, isMovie } = this.state;
    return (
      <DetailPresenter
        detail={detail}
        isLoading={isLoading}
        error={error}
        isMovie={isMovie}
      />
    );
  }
}

export default DetailContainer;
