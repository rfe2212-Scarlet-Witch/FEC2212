import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App.jsx';

it('tests the tests', () => {
  //The github link below takes us to the react-testing-library repo, which includes examples of testing.
  //https://github.com/testing-library/react-testing-library#basic-example

  //REPLACE APP WITH YOUR COMPONENT NAME
  render(<App/>);
  expect(screen.getByText(('To be used by review component'))).toBeInTheDocument()


})