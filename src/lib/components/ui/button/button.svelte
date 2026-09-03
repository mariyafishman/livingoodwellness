<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	/*
		Livingood button: pill-shaped, generous height, visible focus ring.
		`inverse` variants are for use on the deep `ink` band (footer, closing CTA).
	*/
	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium tracking-tight transition-[background-color,color,border-color,transform] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				highlight: "bg-highlight text-highlight-foreground hover:bg-highlight/90",
				outline: "border border-foreground/25 bg-transparent text-foreground hover:border-foreground/50 hover:bg-foreground/5 aria-expanded:bg-foreground/5",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/75",
				ghost: "text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent",
				link: "h-auto rounded-none px-0 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary",
				inverse: "bg-ink-foreground text-ink hover:bg-ink-foreground/90 focus-visible:ring-ink-foreground focus-visible:ring-offset-ink",
				"inverse-outline": "border border-ink-foreground/40 text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground/10 focus-visible:ring-ink-foreground focus-visible:ring-offset-ink",
				destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
			},
			size: {
				default: "h-11 px-5 text-sm",
				sm: "h-9 px-4 text-sm",
				lg: "h-13 px-7 text-base [&_svg:not([class*='size-'])]:size-5",
				icon: "size-11",
				"icon-sm": "size-9",
				"icon-lg": "size-13 [&_svg:not([class*='size-'])]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
