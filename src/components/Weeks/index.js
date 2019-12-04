import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetch } from '../../services/api';
import Results from '../Results';

class Weeks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      chosenWeek: parseInt(this.props.match.params.index, 10), // TASK #2 - make matches start at 1 instead of 0
    };
  }

  componentWillMount() {
    fetch('/weeks').then(data => this.setState({ data: data }));
  }

  componentWillReceiveProps(nextProps) {
    const a = this.state.chosenWeek;
    const b = parseInt(nextProps.match.params.index, 10);
    if (a !== b) {
      this.setState({ chosenWeek: b });
    }
  }

  render() {
    if (!this.state.data.length) return <div>loading...</div>;

    return (
      <div className="weeks">
        <h1>Weeks</h1>
        <div className="week-chooser">
          <ul className="unstyled">
            {this.state.data.map((w, nr) => (
              <li key={nr}>
                <Link to={`/weeks/${nr}`}>{nr}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h2>Results for week #{this.state.chosenWeek}</h2>
        <Results results={this.state.data[this.state.chosenWeek]} />
      </div>
    );
  }
}

export default Weeks;
