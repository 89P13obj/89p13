import React from "react";
import { connect } from "react-redux";
import ConnectedCompany from "../Company";
import { load } from "../../behavior/actions";
import "./style.css";

class Companies extends React.Component {
  nextClick = () => {
    const { position, onLoad } = this.props;
    onLoad && onLoad(position + 10);
  };

  prevClick = () => {
    const { position, onLoad } = this.props;
    onLoad && onLoad(position - 10);
  };

  render() {
    const { position } = this.props;

    const companyIndexes = [];
    for (let i = 10; i > 0; i--) {
      companyIndexes.push(position - i);
    }

    return (
      <>
        <table className="Companies">
          <thead>
            <tr>
              <td className="col1"> Number </td>
              <td className="col2"> Symbol </td>
              <td className="col3"> Company Name </td>
              <td className="col4"> Open </td>
              <td className="col5"> Close </td>
              <td className="col6"> Change </td>
            </tr>
          </thead>
          <tbody>
            {companyIndexes.map(ind => (
              <ConnectedCompany key={ind} ind={ind} />
            ))}
          </tbody>
        </table>
        <button className="Prev" onClick={this.prevClick}>
          Prev
        </button>
        <button className="Next" onClick={this.nextClick}>
          Next
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    position: state.position,
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: position => dispatch(load(position))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
