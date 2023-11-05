import { render, screen } from '@testing-library/react';
import { SelectMode } from '../SelectMode';

describe('ModeButton Component', () => {
  it('should ', () => {
    render(<SelectMode />); // Arrange and Act
    const btnElement = screen.getByTestId('button')
    expect(btnElement).toBeInTheDocument;
  });
});