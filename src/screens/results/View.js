import PropertyCard from '../../components/property-card';
import React, { Component } from 'react';
import { Link } from 'react-router';
import type { Property } from '../../types/Property';
import type { Fetch } from 'isomorphic-fetch';


export default class Results extends Component{

  static fetchData () : Fetch {
      return fetch('http://localhost:3001/api')
          .then(response => response.json())
          .then(properties => properties);
  }

  renderProperties () {
      console.log(this.props)
      return this.props.data.map((property: Property, key) => <PropertyCard key={key} {...property} />)
  }

  render () {
    return (
      <div>
        <Link to="/"> Back to home page </Link>
        {this.renderProperties()}
      </div>
    );
  }
}
