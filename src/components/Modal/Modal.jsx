import React from "react"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const {isOpen} = this.props;

    return (
        <div>
          <div className="modal" style={isOpen ? {display: "block"} : {display: "none"}} role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Modal;