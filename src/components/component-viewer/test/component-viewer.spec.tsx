import { newSpecPage } from '@stencil/core/testing';
import { ComponentViewer } from '../component-viewer';

describe('component-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentViewer],
      html: `<component-viewer></component-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <component-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-viewer>
    `);
  });
});
