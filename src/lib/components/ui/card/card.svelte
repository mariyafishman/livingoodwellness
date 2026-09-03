<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	/* Livingood card: flat fill, 2px ink outline, hard offset shadow. */
	export const cardVariants = tv({
		base: "flex flex-col gap-5 rounded-xl border-2 border-ink p-6 text-card-foreground",
		variants: {
			variant: {
				default: "bg-card shadow-hard-lg",
				flat: "bg-card",
				secondary: "bg-secondary text-secondary-foreground shadow-hard-lg",
				accent: "bg-accent text-accent-foreground shadow-hard-lg",
				peach: "bg-peach text-peach-foreground shadow-hard-lg",
				outline: "bg-transparent",
			},
		},
		defaultVariants: { variant: "default" },
	});

	export type CardVariant = VariantProps<typeof cardVariants>["variant"];
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { variant?: CardVariant } = $props();
</script>

<div bind:this={ref} data-slot="card" class={cn(cardVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>
