import { render } from '@testing-library/react';

import CommonWeb from './common-web';

describe('CommonWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonWeb />);
    expect(baseElement).toBeTruthy();
  });
});
