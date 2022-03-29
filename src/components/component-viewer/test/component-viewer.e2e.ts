import { newE2EPage } from '@stencil/core/testing';

describe('component-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-viewer></component-viewer>');

    const element = await page.find('component-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
