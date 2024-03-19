"use client";

import { ColumnDef } from "@tanstack/react-table";

import { bh_brand, Certificate } from "./../../bh";

export const columns: ColumnDef<Certificate>[] = [
  {
    accessorKey: "domain_name",
    header: "Domain Name",
  },
  {
    accessorKey: "valid_date",
    header: "Valid Date",
  },
  {
    accessorKey: "expire_date",
    header: "Expire Date",
  },
  {
    accessorKey: "remain_days",
    header: "Remain Day",
  },
  {
    accessorKey: "issuer",
    header: "Issuer",
  },
  {
    accessorKey: "last_check",
    header: "Last Check",
  },
  {
    accessorKey: "ip_server",
    header: "Ip Server",
  },
];
