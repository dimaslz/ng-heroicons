export const lastVersionsExample = `
<!-- example by components -->
<div>
  <!-- using style -->
  <academic-cap-outline-icon style="color: red;" />

  <!-- using css classes (class for color will affect to svg) -->
  <academic-cap-outline-icon class="text-red-400" />

  <!-- pass color or size -->
  <academic-cap-outline-icon size="48" color="red" />

  <!-- To apply specific style to the SVG, use \`svgStyle\` -->
  <academic-cap-outline-icon svgStyle="color: red;" />

  <!-- To apply specific css to the SVG, use \`svgClass\` -->
  <academic-cap-outline-icon svgClass="your-class-for-the-svg" />
</div>

<!-- example by <ng-heroicons ... /> component -->
<div>
  <!-- force to render outline icon -->
  <ng-heroicons icon="academic-cap" outline />

  <!-- force to render solid icon -->
  <ng-heroicons icon="academic-cap" solid />

  <!-- using style -->
  <ng-heroicons icon="academic-cap" style="color: red;" />

  <!-- using css classes (class for color will affect to svg) -->
  <ng-heroicons icon="academic-cap" class="text-red-400" />

  <!-- pass color or size -->
  <ng-heroicons icon="academic-cap" size="48" color="red" />
</div>
`.trim();
