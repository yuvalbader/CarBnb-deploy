import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../NavBar';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavBar', () => {
  test('should render with no parameters', () => {
    const { navbar } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    expect(navbar).toMatchSnapshot();
  });
});
