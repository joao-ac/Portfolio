import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Create a type that determines if the Button is an anchor or a button
type ButtonProps<T extends React.ElementType> =
  T extends "a"
    ? React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants>
    : React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

interface BaseButtonProps {
  as?: React.ElementType; // Use 'as' to specify the component type
  asChild?: boolean; // Whether to render as a child
}

const Button = <T extends React.ElementType = "button">(
  { className, variant, size, as: Component = "button", asChild = false, children, ...props }:
  BaseButtonProps & ButtonProps<T>,
  ref: React.Ref<T>
) => {
  const Comp = asChild ? Slot : Component;

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
};

const ForwardedButton = React.forwardRef(Button);
ForwardedButton.displayName = "Button";

export { ForwardedButton as Button, buttonVariants };
