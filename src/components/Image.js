import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../App.css';

const Image = ({ imageName, handleClick, isCardDisabled }) => {
  const clickHandler = isCardDisabled ? null : handleClick;
  const cursorStyle = isCardDisabled ? 'auto' : 'pointer';
  switch (imageName) {
    case 'back':
      return (
        <Card
          imageStyle={{ fill: '#00ced1', cursor: cursorStyle }}
          shape={
            <rect x="0" y="0" width="100" height="100" onClick={clickHandler} />
          }
        />
      );
    case 'x':
      return (
        <Card
          imageStyle={{ stroke: '#ff0000', strokeWidth: '15' }}
          shape={
            <Fragment>
              <line x1="25" y1="25" x2="75" y2="75" />
              <line x1="25" y1="75" x2="75" y2="25" />
            </Fragment>
          }
        />
      );
    case 'star':
      return (
        <Card
          imageStyle={{ fill: '#0000ff' }}
          shape={<polygon points="50,13 27,88 88,42 12,42 73,88" />}
        />
      );
    case 'square':
      return (
        <Card
          imageStyle={{ fill: '#800080' }}
          shape={<rect x="25" y="25" width="50" height="50" />}
        />
      );
    case 'circle':
      return (
        <Card
          imageStyle={{ fill: '#00ff00' }}
          shape={<circle cx="50" cy="50" r="30" />}
        />
      );
    case 'heart':
      return (
        <Card
          imageStyle={{ fill: '#ff1493' }}
          shape={
            <path d="M 50 85 L30 60 C -5 15 55 15 50 40 C 45 15 105 15 70 60 Z" />
          }
        />
      );
    case 'rounded square':
      return (
        <Card
          imageStyle={{ fill: '#ff8c00' }}
          shape={<rect x="25" y="25" rx="10" ry="10" width="50" height="50" />}
        />
      );
    case 'triangle':
      return (
        <Card
          imageStyle={{ fill: '#20b2aa' }}
          shape={<polygon points="50,19 15,79 85,79" />}
        />
      );
    case 'inverted triangle':
      return (
        <Card
          imageStyle={{ fill: '#008000' }}
          shape={<polygon points="50,83 15,23 85,23" />}
        />
      );
    default:
      return null;
  }
};

PropTypes.Image = {
  imageName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isCardDisabled: PropTypes.bool.isRequired
};

export default Image;
