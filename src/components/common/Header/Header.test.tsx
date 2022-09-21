import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

// install new package to mock redux store
// npm i --save-dev redux-mock-store
// npm i --save @types/redux-mock-store
import configureStore from 'redux-mock-store';
import Header from './Header';

// Wrap your component with Mock redux provider
const renderHeaderComponent = async () => {
  const mockStore = configureStore();
  const store = mockStore();

  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe('Header', () => {
  it('should display header elements', async () => {
    // arrange
    await renderHeaderComponent();

    // act
    const logoTextElement = screen.queryByText(/Code Editor App/i);

    // test svg existence by awaiting it and using findByTestId()
    const svgElement = await screen.findByTestId(/dark-mode-icon/i);
    const switchElement = screen.getByRole('checkbox');
    const buttonElement = screen.getByRole('button');

    // assert
    expect(logoTextElement).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
    expect(switchElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should toggle the value dark mode switch when clicked', async () => {
    // arrange
    await renderHeaderComponent();

    // act & assert
    const switchElement = screen.getByRole('checkbox', { checked: false });

    userEvent.click(switchElement);
    // check switch input checked property
    expect(switchElement).toHaveProperty('checked', true);
    userEvent.click(switchElement);
    expect(switchElement).toHaveProperty('checked', false);
  });
});
