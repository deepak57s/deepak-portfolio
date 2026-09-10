import React from "react";
import { cn } from "../lib/utils";

export interface CandyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CandyButton({ className, children = "Verify", ...props }: CandyButtonProps) {
  return (
    <button
      className={cn(
        "relative text-white font-semibold text-xs leading-normal tracking-[0.02em]",
        "px-4 py-1.5 rounded-xl cursor-pointer transition-all duration-200 ease-out inline-flex items-center justify-center gap-1.5",
        "border border-[#54A1FD] bg-[radial-gradient(95%_60%_at_50%_75%,#005FD6_0%,#209BFF_100%)]",
        "shadow-[0px_4px_24px_-8px_#1187FF,inset_0px_1px_8px_-4px_#FFFFFF]",
        "active:scale-95 active:rotate-1",
        "after:absolute after:top-[1px] after:right-[10%] after:w-[60%] after:h-[1px]",
        "after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent",
        "hover:brightness-110",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default CandyButton;
