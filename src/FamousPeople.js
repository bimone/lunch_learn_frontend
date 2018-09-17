import React from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { query } = this.state;
    const { list } = this.props;
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="Text here!"
        />
        <ul>
          <li>{list[0].name}</li>
        </ul>
      </div>
    );
  }
}

FamousPeople.propTypes = {
  list: PropTypes.array,
};

FamousPeople.defaultProps = {
  list: FAMOUS_PEOPLE,
};
export default FamousPeople;
