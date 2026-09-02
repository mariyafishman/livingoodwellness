<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	/*
	 * Restyled for Livingood: pill buttons, larger tap targets (seniors call and
	 * book from phones), butter yellow as the "book" colour. Variants map onto
	 * the theme tokens in layout.css so they work in both modes.
	 */
	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent font-sans font-semibold transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/40 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				secondary: "bg-butter text-butter-foreground hover:bg-butter/85",
				outline: "border-current bg-transparent hover:bg-current/10 aria-expanded:bg-current/10",
				ghost: "hover:bg-current/10 aria-expanded:bg-current/10",
				destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-11 gap-2 px-5 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
				xs: "h-8 gap-1.5 px-3 text-sm [&_svg:not([class*='size-'])]:size-4",
				sm: "h-9 gap-1.5 px-4 text-sm [&_svg:not([class*='size-'])]:size-4",
				lg: "h-14 gap-2.5 px-7 text-lg has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
				icon: "size-11",
				"icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-4",
				"icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-4",
				"icon-lg": "size-14",
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
