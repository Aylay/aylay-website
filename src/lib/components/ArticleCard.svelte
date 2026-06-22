<script lang="ts">
  import type { Snippet } from 'svelte';

  type Color = 'cobalt' | 'coral' | 'teal';

  let {
    tag,
    year,
    title,
    color,
    children,
  }: {
    tag: string;
    year: string;
    title: string;
    color: Color;
    children: Snippet;
  } = $props();

  const colorStyle: Record<Color, string> = {
    cobalt: '--c: var(--color-cobalt); --c-ink: var(--cobalt-ink)',
    coral:  '--c: var(--color-coral);  --c-ink: var(--coral-ink)',
    teal:   '--c: var(--color-teal);   --c-ink: var(--teal-ink)',
  };
</script>

<article
  class="card-accent bg-(--card) border border-(--line) rounded-[14px] p-[clamp(24px,3vw,32px)] relative overflow-hidden transition-[transform,border-color] duration-240 hover:-translate-y-1 hover:border-(--line-2) rv"
  style={colorStyle[color]}
>
  <div class="font-mono text-[11px] font-bold tracking-[.04em] text-(--c-ink) flex justify-between mb-4.5">
    <span>{tag}</span><span>{year}</span>
  </div>
  <h3 class="font-display font-semibold text-[26px] tracking-[-0.01em] mb-2.5">{title}</h3>
  <p class="text-[15px] leading-[1.6] text-(--muted)">{@render children()}</p>
</article>
