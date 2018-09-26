import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getFamousPeopleError, getFamousPeopleList, getFamousPeopleLoading } from './redux/selectors';
import * as actions from './redux/actions';

const Container = styled.div`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}
`;

const BASE_LMGTFY_URL = 'http://lmgtfy.com/?q=';

const constructUrl = person => `${BASE_LMGTFY_URL}${person.queryUrl}`;

class FamousPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchFamousPeople } = this.props;
    fetchFamousPeople();
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  static renderFamousPeople(famousPeople) {
    return famousPeople.map(x => (
      <li key={x.name}>
        <a href={constructUrl(x)}>{x.name}</a>
      </li>
    ));
  }

  renderOnCondition(list) {
    const { loading } = this.props;
    if (loading) {
      return <div>THIS IS LOADING!</div>;
    }

    return FamousPeople.renderFamousPeople(list);
  }

  render() {
    const { list, fetchMoreFamousPeople } = this.props;
    const { query } = this.state;

    let famousPeople = list;
    const currentQuery = query.trim().toLowerCase();

    if (currentQuery.length > 0) {
      famousPeople = famousPeople.filter(x => x.name.toLowerCase().match(currentQuery));
    }

    return (
      <Container className="container">
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="Text here!"
        />
        <button style={{ float: 'right' }} onClick={fetchMoreFamousPeople} className="btn striped-shadow white">
          <span>MORE PEOPLE!</span>
        </button>
        <ul className="list-container">
          {this.renderOnCondition(famousPeople)}
        </ul>
      </Container>
    );
  }
}

FamousPeople.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchMoreFamousPeople: PropTypes.func.isRequired,
  fetchFamousPeople: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  list: getFamousPeopleList(state),
  loading: getFamousPeopleLoading(state),
  error: getFamousPeopleError(state),
});


export default connect(mapStateToProps, { ...actions })(FamousPeople);
