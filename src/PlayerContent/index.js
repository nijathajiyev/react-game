import { Component } from "react";
import { Card } from "../Card";

export class PlayerContent extends Component {
  render() {
    let inlineStyle = {
      display: "flex",
      "justify-content": "center",
    };
    let { data } = this.props;
    return (
      <div style={inlineStyle}>
        {data.map((hero, index) => (
          <Card key={`card-${index}`} hero={hero} />
        ))}
      </div>
    );
  }
}
