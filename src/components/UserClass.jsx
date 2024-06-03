import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="User-class">
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc
        </button>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h3>{contact}</h3>
      </div>
    );
  }
}
export default UserClass;
