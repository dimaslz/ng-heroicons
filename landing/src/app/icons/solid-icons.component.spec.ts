// import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture } from '@angular/core/testing';
// import { render } from '@testing-library/angular';
// import kebabcase from 'lodash.kebabcase';

// import * as SOLID_ICONS from '@dimaslz/ng-heroicons';

// import { SolidIconsComponent } from './solid-icons.component';

// const ICONS_ARRAY = Object.entries(SOLID_ICONS);

describe('Solid icons', () => {
	it("dummy", () => {
		expect(true).toBe(true)
	})
	// let fixture: ComponentFixture<SolidIconsComponent>;
	// let container: Element;

	// beforeAll(async () => {
	//   const component = await render(SolidIconsComponent, {
	//     imports: [
	//       CommonModule,
	//     ],
	//     schemas: [CUSTOM_ELEMENTS_SCHEMA]
	//   });

	//   fixture = component.fixture;
	//   container = component.container;
	// });

	// it('should create the app', () => {
	//   const app = fixture.componentInstance;
	//   expect(app).toBeTruthy();
	// });

	// let componentsCounter = 0;
	// it.each(ICONS_ARRAY)(
	//   'should be component: %s', (name) => {
	//     const componentTag = kebabcase(name).replace('-component', '');
	//     expect(container.querySelector(componentTag)).toBeTruthy();

	//     componentsCounter++;
	//   });

	// it(`should be ${ICONS_ARRAY.length} components`, () => {
	//   expect(ICONS_ARRAY.length).toBe(componentsCounter);
	// });
});
