<script lang="ts">
	let hovering: boolean;
	export let newClass = '';

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} class={newClass}>
	<slot {hovering} />
</div>
