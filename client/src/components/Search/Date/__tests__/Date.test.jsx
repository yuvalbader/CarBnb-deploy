import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Date from '../Index';

describe('Date', () => {
  test('should render with no parameters', () => {
    const { date } = render(<Date />);

    expect(date).toMatchSnapshot();
  });
});
