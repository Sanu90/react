// class component

import { Component } from "react";

class Sanup extends Component {
  render() {
    return <h2>This is a h2 tag.....--..{this.props.a}</h2>;
  }
}

// functional component
// function Sanup(props) {
//   return <h2>This is a h2 tag.......{props.a}</h2>;
// }

export default Sanup;
