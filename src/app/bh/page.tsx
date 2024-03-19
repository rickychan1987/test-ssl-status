import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { bh_brand } from "@/bh";

interface Props {}

const People = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={bh_brand} />
    </div>
  );
};

export default People;
