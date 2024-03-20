import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { tz_brand } from "@/tz";
import { SelectBrand } from "@/components/select-brand";

type Props = {};

const TzBrand = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center justify-center mb-8 text-2xl">
        <h1 className="text-blue-600 font-bold">Tian Zi - 天子</h1>
      </div>
      <SelectBrand />
      <DataTable columns={columns} data={tz_brand} />
    </div>
  );
};

export default TzBrand;
