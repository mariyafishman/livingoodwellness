<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";

	export const badgeVariants = tv({
		base: "inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-0.5 font-sans text-xs font-semibold tracking-wide [&>svg]:pointer-events-none [&>svg]:size-3",
		variants: {
			variant: {
				default: "border-transparent bg-primary text-primary-foreground",
				secondary: "border-transparent bg-secondary text-secondary-foreground",
				highlight: "border-transparent bg-highlight text-highlight-foreground",
				outline: "border-foreground/20 text-foreground",
				inverse: "border-transparent bg-ink-foreground/15 text-ink-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
	export type BadgeProps = WithElementRef<HTMLAttributes<HTMLElement>> &
		WithElementRef<HTMLAnchorAttributes> & { variant?: BadgeVariant };
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		children,
		...restProps
	}: BadgeProps = $props();
</script>

{#if href}
	<a bind:this={ref} data-slot="badge" {href} class={cn(badgeVariants({ variant }), className)} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<span bind:this={ref} data-slot="badge" class={cn(badgeVariants({ variant }), className)} {...restProps}>
		{@render children?.()}
	</span>
{/if}
