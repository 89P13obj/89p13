import React from "react";
import { connect } from "react-redux";

export class Company extends React.Component {
  render() {
    const { companies, idNum } = this.props;
    return (
      <tr>
        <td>{companies !== undefined && idNum}</td>
        <td>{companies !== undefined && companies.symbol}</td>
        <td>{companies !== undefined && companies.companyName}</td>
        <td>{companies !== undefined && companies.open}</td>
        <td>{companies !== undefined && companies.close}</td>
        <td
          className={
            companies !== undefined && companies.change > 0 ? "plus" : "minus"
          }
        >
          {companies !== undefined && companies.change}
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const companies = state.companies[ownProps.ind];

  return { companies, idNum: ownProps.ind + 1 };
}

export default connect(mapStateToProps)(Company);
