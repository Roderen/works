import React from "react"
import Modal from "./components/Modal/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = { modal: false };

  toggle = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
        <div className="App">
          <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>

          <Modal isOpen={this.state.modal}>
            <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="modal-close-button btn btn-default" onClick={this.toggle}>Cancel</button>
            </Modal.Footer>
          </Modal>
        </div>
    )
  }
}

export default App;
