import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/index.jsx';

describe('Jest Testing', function() {
  //The following allows us to simulate the screen for testing
  const user = userEvent.setup();
  // render(<App />)

  /*
  it('should increase the counter', () => {
    The FOLLOWING LINE IS NECESSARY! TO RENDER THE APP
    render(<App/>)
    expect(screen.getByTestId('counter')).toHaveTextContent('0')
    //The following gets the button in a hypothetical react website with one button
    //Different screen.getByXXXX exists to specify what you want to test
    user.click(screen.getByRole('button))
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('1');
      })

  })

  GET BY TEST ID on line 12 can find dom elements that have the attribute 'data-testid="counter" and test it.
  For example the div or html tag would require:
    <div data-testid="counter"> For our test case to find the specific html element to test.
  READ Jest documentation for specific test cases that can be implemented.
  */
})