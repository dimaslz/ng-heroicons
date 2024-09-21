import { Routes } from '@angular/router';

import { HomePageComponent } from '@/app/home.component';
import { NotFoundPageComponent } from '@/app/not-found.component';

export const routes: Routes = [
	{
		path: "",
		component: HomePageComponent,
	},
	{
		path: "docs",
		loadChildren: () => import("./pages/documentation/documentation.module")
			.then((m) => m.DocumentationModule)
	},
	{ path: '**', component: NotFoundPageComponent }
];
