import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

const mockHandler = jest.fn();

describe('<Controls/>', () => {
  test('renders the times tried', () => {
    const { getByText } = render(
      <Controls
        finished={false}
        timesTried={10}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );

    const element = getByText('Number of tries: 10');
    expect(element).toBeDefined();
  });

  test('renders the finish message', () => {
    const { getByText } = render(
      <Controls
        finished={true}
        timesTried={0}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );
    const element = getByText('You found all pairs. Congratulations!');
    expect(element).toBeDefined();
  });

  test('does not render the finish message if not finished', () => {
    const { queryByText } = render(
      <Controls
        finished={false}
        timesTried={0}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );

    const element = queryByText('You found all pairs. Congratulations!');
    expect(element).toBeNull();
  });

  test('clicking the button calls event handler once', async () => {
    const { getByText } = render(
      <Controls
        finished={false}
        timesTried={0}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );

    const button = getByText('New game');
    fireEvent.click(button);

    expect(mockHandler.mock.calls.length).toBe(1);
  });
});
