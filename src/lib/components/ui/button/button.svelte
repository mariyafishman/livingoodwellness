<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	/*
		Buttons follow the canvas: 4px corners, Jost medium, generous padding, an 18px stroke icon
		at the end when there is one. `default` is the fir (mint in dark mode) primary, `outline`
		is the 1.5px heading-coloured secondary, `ochre` is the MassageBook accent button.
	*/
	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-md font-sans font-medium tracking-[0.01em] transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				outline: "border-[1.5px] border-heading bg-transparent text-heading hover:bg-heading/8 aria-expanded:bg-heading/8",
				ochre: "bg-ochre text-ochre-foreground hover:bg-ochre/90",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary",
				ghost: "text-foreground hover:bg-muted aria-expanded:bg-muted",
				destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:outline-destructive",
				link: "h-auto gap-2 px-0 py-0 text-heading hover:text-eyebrow",
			},
			size: {
				default: "h-13 px-[26px] text-base",
				sm: "h-11 px-5 text-[15px]",
				lg: "h-14 px-7 text-[17px]",
				icon: "size-11",
				"icon-sm": "size-10",
				"icon-lg": "size-12",
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
