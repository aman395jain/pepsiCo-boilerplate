import React, { Component } from "react";

import Accordion from './Accordion';

export default class AccordionApp extends Component {
  render() {
    return (
      <div>
        <h1>Accordion Demo</h1>
        <Accordion>
          <div label='Alligator Mississippiensis'>
            <p>
              <strong>Common Name:</strong> American Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Texas to North Carolina, US
            </p>
            <p>
              <strong>Endangered Status:</strong> Currently Not Endangered
            </p>
          </div>
          <div label='Alligator Sinensis'>
            <p>
              <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Eastern China
            </p>
            <p>
              <strong>Endangered Status:</strong> Critically Endangered
            </p>
          </div>
        </Accordion>
      </div>
    );
  }
}