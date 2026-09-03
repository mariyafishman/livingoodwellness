<script lang="ts">
	import { Separator as SeparatorPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		orientation = "horizontal",
		...restProps
	}: WithoutChildrenOrChild<SeparatorPrimitive.RootProps> = $props();
</script>

<SeparatorPrimitive.Root
	bind:ref
	data-slot="separator"
	class={cn(
		"shrink-0 bg-ink data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5",
		className
	)}
	{orientation}
	{...restProps}
/>
