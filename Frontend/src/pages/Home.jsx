import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setExpenses(data);
    }

    fetchExpenses();
  }, []);

  const columns = [
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "item",
      header: "Item",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
  ];

  const table = useReactTable({
    data: expenses,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content flex flex-col">
        <Navbar />

        <div className="p-6">
          <table className="table table-zebra">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.column.columnDef.header}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {cell.getValue()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}