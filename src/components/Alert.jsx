import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Alert extends React.Component {
  render() {
    const {text, type} = this.props;

    return <>
      <div className={`alert alert-${type}`} role="alert">{text}</div>
    </>
  }
}

export default Alert;