import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  test('element <button> to be in the component', () => {
    render(<Button />)
    const buttonEl = screen.getByRole('button')
    expect(buttonEl).toBeInTheDocument
  });
});

describe('Button Component', () => {
    test('should have text content', () => {
      render(<Button content='' />)
      const textEl = screen.getAllByTestId('text-element')
      expect(textEl).toBeInTheDocument
    });
  });
