import React, { Component } from 'react';

import { fetch } from '../../services/api';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TASK #4 - create a table of results
  computeTable(teams, weeksMatches) {
    return [];
  }

  componentWillMount() {
    Promise.all([fetch('/teams'), fetch('/weeks')]).then(
      (teams, weeksMatches) => {
        this.setState({
          table: this.computeTable(teams, weeksMatches),
        });
      }
    );
  }

  render() {
    const t = this.state.table;
    if (!t) return <div>loading...</div>;

    return 'TODO 4';
  }
}

export default Table;
