<script lang="ts">
  let {
    number,
    title,
    class: className = 'mb-10',
  }: {
    number: string;
    title: string;
    class?: string;
  } = $props();
</script>

<div class="flex items-baseline gap-3.5 rv {className}">
  <span class="font-mono text-[12px] text-(--coral-ink) font-bold" aria-hidden="true">{number}</span>
  <h2 class="font-display font-semibold text-[clamp(28px,5vw,48px)] tracking-[-0.02em] leading-none">{title}</h2>
</div>
