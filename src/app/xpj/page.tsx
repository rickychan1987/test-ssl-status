import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { xpj_brand } from "@/xpj";

interface Props {}

const People = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={xpj_brand} />
    </div>
  );
};

export default People;
