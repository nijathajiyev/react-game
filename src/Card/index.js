import { Component } from "react";

export class Card extends Component {
  render() {
    let { img, name, power } = this.props.hero;
    return (
        <div className="card" border="secondary" style={{width: "15rem", margin:"5px",display:"flex" }}>
        <img src={img} height="150" />
        <div className="card-body">
          <h1>{name}</h1>
          <p>{power}</p>
        </div>
      </div>
    );
  }
}
