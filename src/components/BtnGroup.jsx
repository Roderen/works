import React from "react";
import cn from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftBtn: false,
      rightBtn: false,
    };
  }

  leftClick = () => {
    this.setState({leftBtn: true, rightBtn: false});
  }

  rightClick = () => {
    this.setState({leftBtn: false, rightBtn: true});
  }

  render() {
    const {leftBtn, rightBtn} = this.state;

    const leftButtonClass = cn("btn btn-secondary left", {
      active: leftBtn,
    });

    const rightButtonClass = cn("btn btn-secondary right", {
      active: rightBtn,
    });

    return <>
      <div className="btn-group" role="group">
        <button
            type="button"
            onClick={this.leftClick}
            className={leftButtonClass}
        >
          Left
        </button>
        <button
            type="button"
            onClick={this.rightClick}
            className={rightButtonClass}
        >
          Right
        </button>
      </div>
    </>
  }
}

export default BtnGroup;