import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}
`;

const FAMOUS_PEOPLE = [
  { name: 'GIJoe', queryUrl: 'gi+joe' },
  { name: 'Lt.Dan', queryUrl: 'lt+dan' },
  { name: 'Degommeuse', queryUrl: 'degommeuse' },
  { name: 'TitSmashell', queryUrl: 'TitSmashell' },
  { name: 'TiTanium', queryUrl: 'TiTanium' },
  { name: 'Bob Gratton', queryUrl: 'Bob+Gratton' },
  { name: 'Guy Fiery', queryUrl: 'Guy+Fiery' },
  { name: 'Guy Lafleur', queryUrl: 'Guy+Lafleur' },
  { name: 'Alain', queryUrl: 'Alain' },
];

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

  render() {
    const { list } = this.props;
    const { query } = this.state;

    let famousPeople = list;
    const currentQuery = query.trim().toLowerCase();

    if (currentQuery.length > 0) {
      famousPeople = famousPeople.filter(x => x.name.toLowerCase().match(currentQuery));
    }

    return (
      <Container className="container" backgroundColor="white">
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="Text here!"
        />
        <ul className="list-container">
          {FamousPeople.renderFamousPeople(famousPeople)}
        </ul>
      </Container>
    );
  }
}

FamousPeople.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

FamousPeople.defaultProps = {
  list: FAMOUS_PEOPLE,
};
export default FamousPeople;
