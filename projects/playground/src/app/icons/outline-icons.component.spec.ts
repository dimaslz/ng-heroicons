import { render } from '@testing-library/angular';

import * as OUTLINE_ICONS from '../../../../ng-heroicons/src/lib/heroicons/outline';

describe('Outline icons', () => {
  test.each(Object.entries(OUTLINE_ICONS))(
    'component %s should work',
    async (name, component) => {
      const { fixture } = await render(component);
      expect(fixture.componentInstance).toBeTruthy();
    }
  );
});
