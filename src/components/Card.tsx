import React from 'react';
import '../App.css';

interface Props {
  imageStyle: object;
  shape: JSX.Element;
}

const Card: React.FunctionComponent<Props> = ({ imageStyle, shape }: Props) => (
  <div>
    <svg
      viewBox="0 0 100 100"
      className="card"
      data-testid="card"
      style={imageStyle}
    >
      {shape}
    </svg>
  </div>
);

export default Card;
