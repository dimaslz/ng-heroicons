import { Component, Input, OnInit } from '@angular/core';

function transformDescription(value: string): string {
	return value.replace(
		/\`([^`]+)\`/gi,
		"<code class='font-mono dark:text-gray-200 text-gray-800'>$1</code>",
	);
}

@Component({
	selector: 'code-presentation',
	templateUrl: './code-presentation.component.html',
	styleUrl: './code-presentation.component.scss',
	standalone: false,
})
export class CodePresentationComponent implements OnInit {
	@Input() title: string = '';
	@Input() id: string = '';
	@Input({ transform: transformDescription }) description: string = '';
	@Input() caption: string = '';
	@Input() snippets: any[] = [];

	ngOnInit(): void {
		this.snippets = this.snippets.map((snippet) => {
			if (snippet.type === 'html') {
				snippet.type = 'xml';
			}

			return snippet;
		});
	}
}
