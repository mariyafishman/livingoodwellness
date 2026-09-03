<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border-2 border-ink px-2.5 py-0.5 font-sans text-xs font-semibold tracking-wide [&>svg]:pointer-events-none [&>svg]:size-3",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground",
				accent: "bg-accent text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground",
				peach: "bg-peach text-peach-foreground",
				outline: "bg-transparent text-foreground",
			},
		},
		defaultVariants: { variant: "default" },
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & { variant?: BadgeVariant } = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
