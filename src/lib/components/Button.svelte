<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href,
    variant = 'primary',
    children,
  }: {
    href: string;
    variant?: 'primary' | 'secondary-cobalt' | 'secondary';
    children: Snippet;
  } = $props();
</script>

{#if variant === 'primary'}
  <a
    class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 inline-block"
    {href}
  >{@render children()}</a>
{:else if variant === 'secondary-cobalt'}
  <a
    class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-cloud/45 bg-transparent text-cloud transition-[transform,border-color] duration-140 hover:border-cloud hover:-translate-y-0.5 inline-block"
    {href}
  >{@render children()}</a>
{:else}
  <a
    class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-(--line-2) bg-transparent text-(--text) transition-transform duration-140 hover:-translate-y-0.5 inline-block"
    {href}
  >{@render children()}</a>
{/if}
