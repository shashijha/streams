import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      /*<input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />*/
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.onSubmit(formValues);
    //  event.preventDefault();
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    // only ran if the user not enter the title
    errors.title = "you must enter a value";
  }
  if (!formValues.description) {
    errors.description = "you must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
