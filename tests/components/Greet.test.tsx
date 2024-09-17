import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('group', () => {
  it('should return heading if name exists', () => {
    render(<Greet name="Anil" />);

    // Debug the DOM to check what is rendered
    screen.debug();

    //get headings 
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/anil/i);
  });
  it('should return login button if name doest not exist', () => {
    render(<Greet />);

    //get headings 
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
