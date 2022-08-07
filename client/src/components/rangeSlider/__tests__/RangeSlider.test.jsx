import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RangeSlider from '../RangeSlider';

describe('RangeSlider', () => {
  test('should render with no parameters', () => {
    const { slider } = render(<RangeSlider />);

    expect(slider).toMatchSnapshot();
  });
});
