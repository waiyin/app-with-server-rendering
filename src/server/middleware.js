import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../screens/reducers';
import fetchData from '../shared/fetchData';
import routes from '../shared/routes'
import { match } from 'react-router';

import page from './page';

export default (request, response) => {
  match({location:request.url, routes},(error, redirect, routingState) => {

    fetchData(routingState).then(data => {
      console.log('i went in here')
      const application = (
        <Provider store={createStore(reducers, { apiData:data })}>
          <RouterContext {...routingState} />
        </Provider>
      );
        const applicationString = ReactDOMServer.renderToString(application);
        const pageResponse = page(applicationString, data);

        return response.status(200).send(pageResponse);
    }).catch(error => {
      console.log(error)
    });
  });

}
