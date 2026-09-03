<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	/*
	 * Livingood button: flat color, 2px ink outline, hard offset shadow that
	 * lifts on hover and presses flat on click. Softened neobrutalism.
	 */
	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg border-2 border-ink font-sans font-semibold tracking-tight transition-[transform,box-shadow,background-color] duration-150 outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow-hard hover:-translate-x-px hover:-translate-y-px hover:shadow-hard-lg active:translate-x-px active:translate-y-px active:shadow-hard-none",
				accent:
					"bg-accent text-accent-foreground shadow-hard hover:-translate-x-px hover:-translate-y-px hover:shadow-hard-lg active:translate-x-px active:translate-y-px active:shadow-hard-none",
				outline:
					"bg-background text-foreground shadow-hard hover:-translate-x-px hover:-translate-y-px hover:shadow-hard-lg active:translate-x-px active:translate-y-px active:shadow-hard-none aria-expanded:bg-muted",
				secondary:
					"bg-secondary text-secondary-foreground shadow-hard hover:-translate-x-px hover:-translate-y-px hover:shadow-hard-lg active:translate-x-px active:translate-y-px active:shadow-hard-none",
				ghost: "border-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted",
				link: "border-transparent text-primary underline decoration-2 underline-offset-4 hover:decoration-accent",
				destructive:
					"bg-destructive/10 text-destructive border-destructive/40 hover:bg-destructive/20",
			},
			size: {
				default: "h-10 gap-2 px-4 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				xs: "h-7 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 gap-1.5 rounded-md px-3 text-sm [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-12 gap-2 rounded-lg px-6 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 [&_svg:not([class*='size-'])]:size-5",
				icon: "size-10",
				"icon-xs": "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-8 rounded-md",
				"icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
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
