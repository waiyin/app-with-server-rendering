// @flow

import React, { Component } from 'react';
import PropertyCard from '../../components/property-card';
import { Link } from 'react-router';
import type { Property } from '../../types/Property';
import type { Fetch } from 'isomorphic-fetch';

export default class Results extends Component {
    props: {
        data: Array<Property>
    }

    static fetchData (): Fetch {
        return new Promise((resolve) => {
            // Wait 1 second before making a request to simulate a poor connection.
            setTimeout(() => {
                fetch('http://localhost:3001/api')
                    .then(response => response.json())
                    .then(properties => resolve(properties))
            }, 1000);
        });
    }

    renderProperties () {
        return this.props.data.map((property: Property, key) => <PropertyCard key={key} {...property} />)
    }

    render () {
        return (
            <div>
                <Link to="/"> Back to Home page </Link>
                { this.renderProperties() }
            </div>
        );
    }
}

