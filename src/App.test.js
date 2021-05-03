/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App components mounts', () => {
  beforeEach(() => {
    render(<App />)
  })
  
  it('renders text', async () => {
    const text = screen.findAllByText('My App');

    expect(text).toBeDefined;
  })
})