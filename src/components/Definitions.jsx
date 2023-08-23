import React from "react"

class Definitions extends React.Component {
  render() {
    const props = this.props

    return (
        <dl>
          {
            props.data.map((item) => (
                <React.Fragment key={item.id}>
                  <dt>{item.dt}</dt>
                  <dd>{item.dd}</dd>
                </React.Fragment>
            ))
          }
        </dl>
    )
  }
}

export default Definitions;