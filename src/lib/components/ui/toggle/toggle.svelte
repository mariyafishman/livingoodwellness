<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	/*
	 * Small pill toggles. The pressed state uses the page background so the
	 * toggle reads on any surface, including the green footer card.
	 */
	export const toggleVariants = tv({
		base: "group/toggle inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-display font-bold transition-colors outline-none hover:bg-current/10 focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-pressed:bg-background aria-pressed:text-foreground data-[state=on]:bg-background data-[state=on]:text-foreground aria-invalid:ring-destructive/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		variants: {
			variant: {
				default: "bg-transparent",
				outline: "border border-current/40 bg-transparent",
			},
			size: {
				default: "h-8 min-w-8 px-3 text-xs",
				sm: "h-7 min-w-7 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-10 min-w-10 px-4 text-sm",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ToggleVariant = VariantProps<typeof toggleVariants>["variant"];
	export type ToggleSize = VariantProps<typeof toggleVariants>["size"];
	export type ToggleVariants = VariantProps<typeof toggleVariants>;
</script>

<script lang="ts">
	import { Toggle as TogglePrimitive } from "bits-ui";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		pressed = $bindable(false),
		class: className,
		size = "default",
		variant = "default",
		...restProps
	}: TogglePrimitive.RootProps & {
		variant?: ToggleVariant;
		size?: ToggleSize;
	} = $props();
</script>

<TogglePrimitive.Root
	bind:ref
	bind:pressed
	data-slot="toggle"
	class={cn(toggleVariants({ variant, size }), className)}
	{...restProps}
/>
