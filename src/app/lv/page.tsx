import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { lv_brand } from "@/lv";
import { SelectBrand } from "@/components/select-brand";

type Props = {};

const LvBrand = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center justify-center mb-8 text-2xl">
        <h1 className="text-blue-600 font-bold">Las Vegas - 拉斯维加斯</h1>
      </div>
      <SelectBrand />
      <DataTable columns={columns} data={lv_brand} />
    </div>
  );
};

export default LvBrand;
