import Home from '../../pages/index';
import React from 'react';

import { render, waitFor } from '../testUtils';

describe('Home page', () => {
  it('matches snapshot', async () => {
    const { asFragment } = render(<Home />, {});

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
