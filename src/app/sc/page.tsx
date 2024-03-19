import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { sc_brand } from "@/sc";

type Props = {};

const People = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center justify-center mb-8 text-2xl">
        <h1 className="font-bold">Welcome to SC Brand</h1>
      </div>
      <DataTable columns={columns} data={sc_brand} />
    </div>
  );
};

export default People;
