import { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../Redux/actions';

import s from './Filter.module.css';

class Filter extends Component {
  state = {
    filterText: '',
  };

  onChange = e => {
    this.setState({ filterText: e.currentTarget.value });
    this.props.onChangeFilter(e.currentTarget.value);
  };

  render() {
    return (
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          onChange={this.onChange}
          value={this.state.filterText}
        ></input>
      </label>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeFilter: text => dispatch(actions.onChangeFilter(text)),
});

export default connect(null, mapDispatchToProps)(Filter);
