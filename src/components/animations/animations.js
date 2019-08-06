import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { headShake } from "react-animations";

const HeadShake = styled.div`animation: 2s ${keyframes`${headShake}`} infinite`

export default class Animations extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <HeadShake><h1>This is a head shake animation</h1></HeadShake>
    );
  }
}