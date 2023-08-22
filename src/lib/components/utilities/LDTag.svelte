<script lang="ts">	
	export let schema: any;

  const jsonLdScript = `
     <script type="application/ld+json">
       ${JSON.stringify(schema)}
     ${'<'}/script>
   `;
</script>

<svelte:head>
  {@html jsonLdScript}
</svelte:head>