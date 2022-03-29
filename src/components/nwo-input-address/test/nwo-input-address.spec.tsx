import { newSpecPage } from '@stencil/core/testing';
import { NwoInputAddress } from '../nwo-input-address';

describe('nwo-input-address', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NwoInputAddress],
      html: `<nwo-input-address></nwo-input-address>`,
    });
    expect(page.root).toEqualHtml(`
      <nwo-input-address>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nwo-input-address>
    `);
  });
});
