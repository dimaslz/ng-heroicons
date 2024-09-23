import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Component,
	Inject,
	OnInit,
	PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import hljs from 'highlight.js';
import hljsTs from 'highlight.js/lib/languages/typescript';
import hljsHTML from 'highlight.js/lib/languages/xml';

import {
	installationExample,
	installationExample2,
	lastVersionsExample,
	legacyVersionsExample,
} from './examples';

@Component({
	selector: 'documentation-page',
	templateUrl: './documentation.component.html',
})
export class DocumentationPageComponent implements OnInit, AfterViewInit {
	public install1 = hljs.highlight(installationExample, {
		language: 'typescript',
	}).value;
	public install2 = hljs.highlight(installationExample2, {
		language: 'typescript',
	}).value;
	public legacyVersionsExample = hljs.highlight(legacyVersionsExample, {
		language: 'typescript',
	}).value;
	public lastVersionsExample = hljs.highlight(lastVersionsExample, {
		language: 'typescript',
	}).value;

	constructor(
		@Inject(PLATFORM_ID) private platformId: object,
		@Inject(DOCUMENT) private document: Document,
		private activatedRoute: ActivatedRoute,
	) {}

	async ngOnInit(): Promise<void> {
		hljs.registerLanguage('xml', hljsHTML);
		hljs.registerLanguage('typescript', hljsTs);
	}

	ngAfterViewInit() {
		if (this.isBrowser()) {
			this.activatedRoute.queryParams.subscribe((params) => {
				this.onScrollToTitle(params['id']);
			});
		}
	}

	isBrowser() {
		return isPlatformBrowser(this.platformId);
	}

	onScrollToTitle(id: string) {
		this.document
			.querySelector(`#${id}`)
			?.scrollIntoView({ behavior: 'smooth' });
	}
}
