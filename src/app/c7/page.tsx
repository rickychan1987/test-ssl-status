import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { c7_brand } from "@/c7";
import { SelectBrand } from "@/components/select-brand";

type Props = {};

const C7Brand = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center justify-center mb-8 text-2xl">
        <h1 className="text-blue-600 font-bold">C7 彩七</h1>
      </div>
      <SelectBrand />
      <DataTable columns={columns} data={c7_brand} />
    </div>
  );
};

export default C7Brand;
