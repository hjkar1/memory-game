import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';
import { initializeCards } from '../initialize';
import images from '../images';

const cards = initializeCards(images);

const mockHandler = jest.fn();

describe('<Board/>', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Board cards={cards} clickDisabled={false} handleClick={mockHandler} />
    );
  });

  test('renders the image cards', () => {
    const images = component.container.querySelectorAll('.card');
    expect(images.length).toBe(16);
  });

  test('clicking an image card calls event handler once', async () => {
    component.debug();
    const card = component.container.querySelector('rect');
    fireEvent.click(card);

    expect(mockHandler.mock.calls.length).toBe(1);
  });
});
