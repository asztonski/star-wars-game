import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

it('should have dupa text', () => {
    // AAA Pattern
    render(<Home />) // Arange

    const myElem = screen.getByText('dupa') // Action

    expect(myElem).toBeInTheDocument() // Assert
})