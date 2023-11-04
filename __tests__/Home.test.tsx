import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home Component', () => {
  it('should contain Title and Content components within MainContainer', () => {
    render(<Home />); // Arrange and Act

    // Use screen to select elements by their type (i.e., component name)
    const mainContainer = screen.getByRole('main container');
    const title = screen.getByRole('main title');
    const content = screen.getByRole('main content');

    // Assertions
    expect(mainContainer).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    // Check that Title and Content components are nested within MainContainer
    expect(mainContainer).toContainElement(title);
    expect(mainContainer).toContainElement(content);
  });
});
