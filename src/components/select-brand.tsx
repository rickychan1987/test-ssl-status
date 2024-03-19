"use client";

import * as React from "react";

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
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="destructive">Choose Brand</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Brand :</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioItem value="top">SC</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="top">LV</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="top">C7</DropdownMenuRadioItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
