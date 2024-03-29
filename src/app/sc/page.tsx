import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { sc_brand } from "@/sc";
import { SelectBrand } from "@/components/select-brand";

type Props = {};

const ScBrand = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center justify-center mb-8 text-2xl">
        <h1 className="text-blue-600 font-bold">Sun City - 新太阳城</h1>
      </div>
      <SelectBrand />
      <DataTable columns={columns} data={sc_brand} />
    </div>
  );
};

export default ScBrand;
