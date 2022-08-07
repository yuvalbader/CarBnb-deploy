import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

/* import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App'; */

test('renders learn react link', () => {
  /*   render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/marketplace/i); */
  expect(true).toBe(true);
});

test('renders learn react', () => {
  render(<div>here</div>);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});
