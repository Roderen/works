import React, {Component} from 'react';

class Item extends Component {
  render() {
    const {task, onRemove} = this.props;

    return (
        <div>
          <div key={task.id}>
            <hr/>
            <div className="row">
              <div className="col-auto">
                <button type="button" onClick={onRemove} className="btn btn-primary btn-sm">-</button>
              </div>
              <div className="col">{task}</div>
            </div>
            <hr/>
          </div>
        </div>
    );
  }
}

export default Item;