"use client";
import React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,

  SortingState,
} from "@tanstack/react-table";

export type User = {
  id: string;
  name: string;
  email: string;
  amount: string;
};
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

const index = () => {
  const dataInfo: User[] = [
    {
      id: "1",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "2",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "3",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "4",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "5",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "6",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "7",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "8",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "9",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "10",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "11",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "12",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "13",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "14",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "15",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
    {
      id: "16",
      name: "Thurein zaw",
      email: "trz@gmail.com",
      amount: "20000",
    },
  ];
  const [data, setData] = React.useState<User[]>(dataInfo);
  const [sort, setSort] = React.useState<SortingState>([]);
//   const [filter, setFilter] = React.useState('');
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel:getFilteredRowModel(),
    state: {
      sorting: sort,
    
      
    },
    onSortingChange: setSort,
 
  });
  console.log(table.getHeaderGroups());
  console.log(table.getRowModel());
  return (
    <div className=" flex-col items-center justify-center">
      <div className=" flex items-center justify-center">
        <table className=" border border-slate-400 table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup?.id}>
                {headerGroup?.headers?.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    key={header?.id}
                    className=" border border-slate-400 p-6"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header?.column?.columnDef?.header,
                          header.getContext()
                        )}
                        {
                          { asc: ` asc`, desc: ` desc` }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row?.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell?.id} className=" border border-slate-400 p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" my-2 flex  items-center justify-center">
        <button
          onClick={() => table.setPageIndex(0)}
          className="mx-1 border border-slate-400 hover:bg-slate-400 px-4 py-2"
        >
          {" "}
          First Page{" "}
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="mx-1 border border-slate-400 hover:bg-slate-400 px-4 py-2"
        >
          Next
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="mx-1 border border-slate-400 hover:bg-slate-400 px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="mx-1 border border-slate-400 hover:bg-slate-400 px-4 py-2"
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default index;
