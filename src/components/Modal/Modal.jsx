import React from "react"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {
  static Header = Header;
  // static Body = Body;
  // static Footer = Footer;

  render() {
    return (
        {this.props.children}
    )
  }
}

export default Modal;