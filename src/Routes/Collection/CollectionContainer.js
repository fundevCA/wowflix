import React, { PureComponent } from "react";
import CollectionPresenter from "./CollectionPresenter";
import { collectionAPI } from "../../Components/API";

class CollectionContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      detail: null,
      isLoading: true,
      error: ""
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
      id = parseInt(id);
      let detail = null;
      try {
        ({ data: detail } = await collectionAPI.detail(id));
        this.setState({ detail });
      } catch {
        this.setState({ error: "Could not find the Collection" });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { detail, isLoading, error } = this.state;
    return (
      <CollectionPresenter
        detail={detail}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}

export default CollectionContainer;
