import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

const mockHandler = jest.fn();

describe('<Controls/>', () => {
  test('renders the times tried', () => {
    const component = render(
      <Controls
        finished={false}
        timesTried={10}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );
    expect(component.container).toHaveTextContent('Number of tries: 10');
  });

  test('renders the finish message', () => {
    const component = render(
      <Controls
        finished={true}
        timesTried={0}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );
    expect(component.container).toHaveTextContent(
      'You found all pairs. Congratulations!'
    );
  });

  test('does not render the finish message if not finished', () => {
    const component = render(
      <Controls
        finished={false}
        timesTried={0}
        clickDisabled={false}
        startNew={mockHandler}
      />
    );
    expect(component.container).not.toHaveTextContent(
      'You found all pairs. Congratulations!'
    );
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
