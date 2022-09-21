import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render the welcome message', () => {
    render(<Home />);

    const welcomeMessage = screen.queryByText(
      /Welcome to the Code Editor App/i
    );

    expect(welcomeMessage).toBeInTheDocument();
  });
});
