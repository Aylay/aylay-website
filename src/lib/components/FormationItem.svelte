<script lang="ts">
  let {
    title,
    subtitle,
    year,
  }: {
    title: string;
    subtitle?: string;
    year?: string;
  } = $props();
</script>

<li class="border-t border-(--line) pt-3">
  <div class="font-display font-semibold text-[18px]">{title}</div>
  {#if subtitle}<div class="text-[14px] text-(--muted)">{subtitle}</div>{/if}
  {#if year}<div class="font-mono text-[11px] text-(--faint)">{year}</div>{/if}
</li>
