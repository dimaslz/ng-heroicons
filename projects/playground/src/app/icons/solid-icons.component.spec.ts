import { render } from '@testing-library/angular';

import * as SOLID_ICONS from '../../../../ng-heroicons/src/lib/heroicons/solid';

describe('Solid icons', () => {
  test.each(Object.entries(SOLID_ICONS))(
    'component %s should work',
    async (name, component) => {
      const { fixture } = await render(component);
      expect(fixture.componentInstance).toBeTruthy();
    }
  );
});
