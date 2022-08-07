import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Search', () => {
  test('should render with no parameters', () => {
    const { search } = render(
      <Provider store={store}>
        <Router>
          <Search />
        </Router>
      </Provider>
    );

    expect(search).toMatchSnapshot();
  });
});
