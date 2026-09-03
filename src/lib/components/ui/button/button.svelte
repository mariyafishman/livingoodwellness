<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	/*
		Livingood buttons: pill-shaped, a touch taller than stock shadcn, with a
		soft press. `inverse` is for use on deep-green bands; `honey` is the warm
		accent, used sparingly.
	*/
	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-sans font-semibold tracking-[0.005em] transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-(--ease-out-soft) outline-none select-none focus-visible:ring-4 focus-visible:ring-ring/35 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg:not([class*='size-'])]:size-[1.1em] [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground shadow-[0_1px_0_0_oklch(0_0_0/0.08),inset_0_1px_0_0_oklch(1_0_0/0.12)] hover:bg-primary/90",
				outline: "border-foreground/25 bg-transparent text-foreground hover:border-foreground/45 hover:bg-secondary/50 aria-expanded:bg-secondary/60",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/75 aria-expanded:bg-secondary",
				honey: "bg-honey text-accent-foreground hover:brightness-[1.04]",
				inverse: "bg-background text-foreground hover:bg-background/90",
				ghost: "text-foreground hover:bg-secondary/60 aria-expanded:bg-secondary/60",
				link: "h-auto rounded-none px-0 text-primary underline decoration-primary/40 underline-offset-[0.3em] hover:decoration-primary",
				destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
			},
			size: {
				default: "h-11 px-5 text-[0.95rem] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
				xs: "h-7 gap-1 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
				sm: "h-9 gap-1.5 px-4 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				lg: "h-13 px-7 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
				icon: "size-11",
				"icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-9",
				"icon-lg": "size-13",
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
