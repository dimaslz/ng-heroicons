import '@testing-library/jest-dom';

import { render } from '@testing-library/angular';
import kebabCase from 'lodash.kebabcase';

import { T_OUTLINE_ICONS, T_SOLID_ICONS } from './types';
import { MODULE_CONFIG, OUTLINE_ICONS, SOLID_ICONS } from './constants';

import { DynamicComponent } from './ng-heroicons.component';

describe('NgHeroicons Component icons', () => {
	describe("on success", () => {
		describe("respect default settings", () => {
			it("{ default: 'outline', stroke: 1 }", async () => {
				const { fixture, container } = await render(DynamicComponent, {
					providers: [{
						provide: MODULE_CONFIG,
						useValue: { default: 'outline', stroke: 1 }
					}],
					inputs: {
						icon: "academic-cap",
					}
				});

				expect(fixture.componentInstance.stroke).toBe(1)

				const element = container.querySelector("academic-cap-outline-icon");

				expect(element).toBeInTheDocument();
				expect(element?.querySelector("svg")?.style.strokeWidth).toBe("1px");
			});

			it("{ default: 'solid', stroke: 1 }", async () => {
				const { container } = await render(DynamicComponent, {
					providers: [{
						provide: MODULE_CONFIG,
						useValue: { default: 'solid', stroke: 1 }
					}],
					inputs: {
						icon: "academic-cap",
					}
				});

				const element = container.querySelector("academic-cap-solid-icon");

				expect(element).toBeInTheDocument();
				expect(element?.querySelector("svg")?.style.strokeWidth).toBe("");
			});
		})

		describe("overriding default settings", () => {
			it("overriding default setting: outline to solid", async () => {
				const { container } = await render(DynamicComponent, {
					providers: [{
						provide: MODULE_CONFIG,
						useValue: { default: 'outline', stroke: 1 }
					}],
					inputs: {
						icon: "academic-cap",
						solid: ''
					},
				});

				const element = container.querySelector("academic-cap-solid-icon");

				expect(element).toBeInTheDocument();
				expect(element?.querySelector("svg")?.style.strokeWidth).toBe("");
			});

			it("overriding default setting: solid to outline", async () => {
				const { container } = await render(DynamicComponent, {
					providers: [{
						provide: MODULE_CONFIG,
						useValue: { default: 'solid', stroke: 1 }
					}],
					inputs: {
						icon: "academic-cap",
						outline: '',
						stroke: 2
					}
				});

				const element = container.querySelector("academic-cap-outline-icon");

				expect(element).toBeInTheDocument();
				expect(element?.querySelector("svg")?.style.strokeWidth).toBe("2px");
			});
		})

		describe("outline icons", () => {
			let defaultSettings: any

			beforeEach(() => {
				defaultSettings = {
					providers: [{
						provide: MODULE_CONFIG,
						useValue: { default: 'outline', stroke: 1 }
					}]
				};
			})


			describe.each(Object.entries(OUTLINE_ICONS))(
				'component: %s',
				(name) => {
					const icon = kebabCase(name).replace("-outline-icon-component", "") as T_OUTLINE_ICONS;

					it('should work', async () => {
						const { fixture, container } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
							}
						});

						expect(container.querySelector(kebabCase(name))).toBeDefined();
						expect(fixture.componentInstance).toBeTruthy();
					});

					it('default style', async () => {
						const { fixture } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
							}
						});

						const { width, height, strokeWidth } =
							fixture.nativeElement.querySelector('svg').style;

						expect(width).toBe('24px');
						expect(height).toBe('24px');
						expect(strokeWidth).toBe('1px');
					});

					it('size parameter should work', async () => {
						const { fixture } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
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
						const { fixture } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
								color: 'red'
							}
						});

						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});

					it('stroke parameter should work', async () => {
						const { fixture, container } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
								stroke: 99
							}
						});

						expect(fixture.componentInstance.stroke).toBe(99)

						const element = container.querySelector(`${kebabCase(name).replace("-component", "")}`);

						expect(element).toBeInTheDocument();
						expect(element?.querySelector("svg")?.style.strokeWidth).toBe("99px");
					});

					it('svgStyle parameter should work', async () => {
						const { fixture, rerender } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
							}
						});

						await rerender({
							inputs: {
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

		describe("solid icons", () => {
			let defaultSettings: any

			beforeEach(() => {
				defaultSettings = {
					providers: [{
						provide: MODULE_CONFIG,
						useValue: { default: 'solid', stroke: 1 }
					}]
				};
			})

			describe.each(Object.entries(SOLID_ICONS))(
				'component: %s',
				(name) => {
					const icon = kebabCase(name).replace("-solid-icon-component", "") as T_SOLID_ICONS;

					it('should work', async () => {
						const { fixture, container } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
							}
						});

						expect(container.querySelector(kebabCase(name).replace("-component", "")))
							.toBeInTheDocument();
						expect(fixture.componentInstance).toBeTruthy();
					});

					it('default style', async () => {
						const { fixture, container } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
							}
						});

						const { width, height, strokeWidth } =
							fixture.nativeElement.querySelector('svg').style;

						expect(container.querySelector(kebabCase(name).replace("-component", "")))
							.toBeInTheDocument();
						expect(width).toBe('24px');
						expect(height).toBe('24px');
						expect(strokeWidth).toBe('');
					});

					it('size parameter should work', async () => {
						const { container, fixture } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
								size: 99
							}
						});

						const { width, height } =
							fixture.nativeElement.querySelector('svg').style;

						expect(container.querySelector(kebabCase(name).replace("-component", "")))
							.toBeInTheDocument();
						expect(width).toBe('99px');
						expect(height).toBe('99px');
					});

					it('color parameter should work', async () => {
						const { container, fixture } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
								color: 'red'
							}
						});

						expect(container.querySelector(kebabCase(name).replace("-component", "")))
							.toBeInTheDocument();
						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});

					it('stroke parameter should work', async () => {
						const { container, fixture } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
								stroke: 99
							}
						});

						expect(container.querySelector(kebabCase(name).replace("-component", "")))
							.toBeInTheDocument();
						expect(
							fixture.nativeElement.querySelector('svg').style.strokeWidth,
						).toBe('');
					});

					it('svgStyle parameter should work', async () => {
						const { fixture, container, rerender } = await render(DynamicComponent, {
							...defaultSettings,
							inputs: {
								icon,
							}
						});

						await rerender({
							inputs: {
								icon,
								style: 'color: red;'
							}
						})

						expect(container.querySelector(kebabCase(name).replace("-component", "")))
							.toBeInTheDocument();
						expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
							'red',
						);
					});
				},
			);
		});
	});

	describe("on failure", () => {
		let defaultSettings: any

		beforeEach(() => {
			defaultSettings = {
				providers: [{
					provide: MODULE_CONFIG,
					useValue: { default: 'outline', stroke: 1 }
				}]
			};
		});

		it("should return error when icon does not exists in outline", async () => {
			await expect(async () => {
				await render(DynamicComponent, {
					...defaultSettings,
					inputs: {
						icon: "wrong-icon",
						outline: ""
					}
				} as any);
			}).rejects.toThrow(new Error("The icon name <wrong-icon> does not exists on outline icons."))
		});

		it("should return error when icon does not exists in solid", async () => {
			await expect(async () => {
				await render(DynamicComponent, {
					...defaultSettings,
					inputs: {
						icon: "wrong-icon",
						solid: ""
					}
				} as any);
			}).rejects.toThrow(new Error("The icon name <wrong-icon> does not exists on solid icons."))
		})
	})
});
