import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Time from '../Index';

describe('Time', () => {
  test('should render with no parameters', () => {
    const { time } = render(<Time />);

    expect(time).toMatchSnapshot();
  });
});
