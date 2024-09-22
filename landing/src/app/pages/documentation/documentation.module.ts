import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodePresentationModule } from '@/components/code-presentation/code-presentation.module';

import { DocumentationPageComponent } from './documentation.component';

const routes: Routes = [{ path: '', component: DocumentationPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DocumentationRoutingModule {}

@NgModule({
	imports: [CommonModule, DocumentationRoutingModule, CodePresentationModule],
	exports: [DocumentationPageComponent],
	declarations: [DocumentationPageComponent],
})
export class DocumentationModule {}
