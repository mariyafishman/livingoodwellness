<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	/*
	 * Pill buttons in Manrope 700. Colours come from the semantic tokens so the
	 * same variant works on cream, butter, lilac and green surfaces.
	 */
	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full font-display font-bold transition-[background-color,color,opacity] outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/85",
				/* Border follows the text colour, so it inverts on the green card. */
				outline: "border-2 border-current bg-transparent hover:bg-current/10",
				ghost: "hover:bg-current/10",
				link: "h-auto rounded-none px-0 underline decoration-2 underline-offset-4 hover:opacity-80",
				destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/40",
			},
			size: {
				default: "h-12 gap-2 px-6 text-[0.9375rem]",
				sm: "h-10 gap-1.5 px-5 text-sm",
				lg: "h-14 gap-2 px-7 text-base",
				icon: "size-11",
				"icon-sm": "size-9",
			},
		},
		compoundVariants: [{ variant: "link", size: ["default", "sm", "lg"], class: "h-auto px-0" }],
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
