import { render } from '@testing-library/angular';

import { T_OUTLINE_ICONS, T_SOLID_ICONS } from './types';
import { OUTLINE_ICONS, SOLID_ICONS } from './constants';

import { kebabCase } from 'lodash';
import { NgHeroiconsComponent } from './ng-heroicons.component';

describe('NgHeroicons Component icons', () => {

	describe("on failure", () => {
		it("should return error when icon does not exists in outline", async () => {
			await expect(async () => {
				await render(NgHeroiconsComponent, {
					componentProperties: {
						icon: "wrong-icon",
						outline: ""
					}
				} as any);
			}).rejects.toThrow(new Error("The icon name <wrong-icon> does not exists on outline icons."))
		});

		it("should return error when icon does not exists in solid", async () => {
			await expect(async () => {
				await render(NgHeroiconsComponent, {
					componentProperties: {
						icon: "wrong-icon",
						solid: ""
					}
				} as any);
			}).rejects.toThrow(new Error("The icon name <wrong-icon> does not exists on solid icons."))
		})
	})

	describe("on success", () => {
		it("should use outline icon as default", async () => {
			const { container } = await render(NgHeroiconsComponent, {
				componentProperties: {
					icon: "academic-cap",
				}
			});

			expect(container.getElementsByTagName("academic-cap-outline-icon")).toBeDefined();

		})

		describe("outline icons", () => {
			describe.each(Object.entries(OUTLINE_ICONS))(
				'component: %s',
				(name) => {
					const icon = kebabCase(name).replace("-outline-icon-component", "") as T_OUTLINE_ICONS;

					it('should work', async () => {
						const { fixture, container } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
							}
						});

						expect(container.getElementsByTagName(kebabCase(name))).toBeDefined();
						expect(fixture.componentInstance).toBeTruthy();
					});

					it('default style', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
							}
						});

						fixture.detectChanges();

						const { width, height, strokeWidth } =
							fixture.nativeElement.querySelector('svg').style;

						expect(width).toBe('24px');
						expect(height).toBe('24px');
						expect(strokeWidth).toBe('1px');
					});

					it('size parameter should work', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
								size: 99
							}
						});

						const { width, height } =
							fixture.nativeElement.querySelector('svg').style;

						expect(width).toBe('99px');
						expect(height).toBe('99px');
					});

					it('color parameter should work', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
								color: 'red'
							}
						});

						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});

					it('stroke parameter should work', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
								stroke: 99
							}
						});

						expect(
							fixture.nativeElement.querySelector('svg').style.strokeWidth,
						).toBe('99px');
					});

					it('svgStyle parameter should work', async () => {
						const { fixture, rerender } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
							}
						});

						await rerender({
							componentProperties: {
								icon,
								style: 'color: red;'
							}
						})

						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});
				},
			);
		})
		describe("solid icons", () => {
			describe.each(Object.entries(SOLID_ICONS))(
				'component: %s',
				(name) => {
					const icon = kebabCase(name).replace("-solid-icon-component", "") as T_SOLID_ICONS;

					it('should work', async () => {
						const { fixture, container } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
							}
						});

						expect(container.getElementsByTagName(kebabCase(name))).toBeDefined();
						expect(fixture.componentInstance).toBeTruthy();
					});

					it('default style', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
							}
						});

						fixture.detectChanges();

						const { width, height, strokeWidth } =
							fixture.nativeElement.querySelector('svg').style;

						expect(width).toBe('24px');
						expect(height).toBe('24px');
						expect(strokeWidth).toBe('1px');
					});

					it('size parameter should work', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
								size: 99
							}
						});

						const { width, height } =
							fixture.nativeElement.querySelector('svg').style;

						expect(width).toBe('99px');
						expect(height).toBe('99px');
					});

					it('color parameter should work', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
								color: 'red'
							}
						});

						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});

					it('stroke parameter should work', async () => {
						const { fixture } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
								stroke: 99
							}
						});

						expect(
							fixture.nativeElement.querySelector('svg').style.strokeWidth,
						).toBe('99px');
					});

					it('svgStyle parameter should work', async () => {
						const { fixture, rerender } = await render(NgHeroiconsComponent, {
							componentProperties: {
								icon,
							}
						});

						await rerender({
							componentProperties: {
								icon,
								style: 'color: red;'
							}
						})

						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});
				},
			);
		});
	});
});
