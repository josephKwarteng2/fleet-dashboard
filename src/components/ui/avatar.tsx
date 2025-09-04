import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

function Avatar({
  className,
  active = false,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & { active?: boolean }) {
  return (
    <div className="relative">
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(
          "flex size-8 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      />
      {active && (
        <span
          className="absolute bottom-0 right-0 block size-2.5 rounded-full bg-green-500 border-2 border-white shadow"
          data-testid="avatar-active-dot"
        />
      )}
    </div>
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
