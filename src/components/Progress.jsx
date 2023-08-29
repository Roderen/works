import React from "react"

class Progress extends React.Component {
  render() {
    const percentage = this.props.percentage;

    const barStyle = {
      width: percentage + "%",
      height: "15px",
      backgroundColor: "#19BDFF",
      borderRadius: "5px",
    }

    return <>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"
             aria-label="progressbar" style={barStyle}>
        </div>
      </div>
    </>
  }
}

export default Progress;