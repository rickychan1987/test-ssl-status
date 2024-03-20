"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SelectBrand() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="destructive">Choose Brand</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Brand :</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioItem value="top" onClick={() => router.push("/")}>
          Home
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="top" onClick={() => router.push("/lv")}>
          lv
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="top" onClick={() => router.push("/sc")}>
          sc
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="top" onClick={() => router.push("/tz")}>
          tz
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="top" onClick={() => router.push("/c7")}>
          c7
        </DropdownMenuRadioItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
