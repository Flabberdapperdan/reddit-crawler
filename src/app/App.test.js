/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })
  
  it('renders searchBar component', async () => {
    const text = screen.findAllByText('My App');

    expect(text).toBeDefined;
  })
})