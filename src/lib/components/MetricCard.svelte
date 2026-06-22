<script lang="ts">
  let {
    num,
    label,
    tag,
  }: {
    num: string;
    label: string;
    tag?: string;
  } = $props();
</script>

<div class="border border-(--line) rounded-xl py-4.5 px-5 bg-(--card)">
  <div class="font-display font-bold text-[clamp(30px,4vw,42px)] tracking-[-0.02em] text-(--cobalt-ink) leading-none">{num}</div>
  <div class="text-[14px] text-(--text) mt-2 font-semibold">{label}</div>
  {#if tag}
    <div class="font-mono text-[11px] text-(--faint) mt-0.75">{tag}</div>
  {/if}
</div>
