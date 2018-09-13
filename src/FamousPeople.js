import React from 'react';

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
  }


  render() {
    return <div>{this.props.ismael}</div>;
  }
}

export default FamousPeople;
