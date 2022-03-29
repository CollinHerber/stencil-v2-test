import { newE2EPage } from '@stencil/core/testing';

describe('nwo-input-address', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nwo-input-address></nwo-input-address>');

    const element = await page.find('nwo-input-address');
    expect(element).toHaveClass('hydrated');
  });
});
