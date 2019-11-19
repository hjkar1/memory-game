import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board from './Board';
import { initializeCards } from '../initialize';
import images from '../images';

const cards = initializeCards(images);

const mockHandler = jest.fn();

describe('<Board/>', () => {
  test('renders the image cards', () => {
    const { getAllByTestId } = render(
      <Board cards={cards} clickDisabled={false} handleClick={mockHandler} />
    );
    const images = getAllByTestId('card');
    expect(images.length).toBe(16);
  });

  test('clicking an image card calls event handler once', async () => {
    const { getAllByTestId } = render(
      <Board cards={cards} clickDisabled={false} handleClick={mockHandler} />
    );
    const rects = getAllByTestId('rect');
    fireEvent.click(rects[0]);

    expect(mockHandler.mock.calls.length).toBe(1);
  });
});
