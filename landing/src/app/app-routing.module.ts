import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '@/app/app.routes';

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
