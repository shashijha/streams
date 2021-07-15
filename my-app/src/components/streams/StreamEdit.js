import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editSteram } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editSteram(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          //  initialValues={this.props.stream}
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // return {stream: this.state.stre}
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editSteram })(
  StreamEdit
);
