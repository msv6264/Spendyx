import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Check, ChevronDown } from "lucide-react";
import { delExp, newExp, updExpense } from "../api/fetchWithAuth";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Entertainment",
    "Other",
  ];

  useEffect(() => {
    const token = localStorage.getItem("spendyx-token");

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/expense`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = async (expense) => {
    setEditingId(expense._id);
  };

  const inputStyles =
    "w-full box-border px-3 py-2 bg-[#1c2230] text-white border border-violet-500 rounded-lg outline-none";

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setExpenses((prev) =>
      prev.map((expense) =>
        expense._id === id ? { ...expense, [name]: value } : expense,
      ),
    );
  };

  const updateExpense = async (expense) => {
    if (expense.isNew) {
      const token = localStorage.getItem("spendyx-token");
      const response = await newExp(expense, token);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setExpenses((prev) =>
        prev.map((exp) =>
          exp._id === expense._id ? { ...data, isNew: false } : exp,
        ),
      );
    } else {
      const token = localStorage.getItem("spendyx-token");
      const response = await updExpense(expense, editingId, token);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
    }

    setEditingId(null);
  };

  const handleNewExpense = () => {
    const newExpense = {
      _id: Date.now(),
      date: "",
      category: "Food",
      price: "",
      item: "",
      isNew: true,
    };

    setExpenses((prev) => [...prev, newExpense]);
    setEditingId(newExpense._id);
  };

  const handleDelete = async (expense) => {
    const delId = expense._id;

    const token = localStorage.getItem("spendyx-token");
    setExpenses((prev) => prev.filter((obj) => obj._id !== delId));

    const apiResponse = await delExp(delId, token);

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(data.message);
    }
  }

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Expenses</h1>
          <p className="text-gray-400 mt-1">Track and manage your spending</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1117]">
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-[#151923] text-gray-400 text-sm uppercase">
            <tr>
              <th className="w-[240px] text-left border border-gray-800 px-4 py-4">
                Date
              </th>
              <th className="w-[200px] text-left border border-gray-800 px-6 py-4">
                Category
              </th>
              <th className="w-[120px] text-left border border-gray-800 px-6 py-4">
                Amount
              </th>
              <th className="text-left border border-gray-800 px-8 py-4">
                Item
              </th>
              <th className="w-[200px] text-left border border-gray-800 px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense._id}
                className="border-t border-gray-800 hover:bg-[#161b26] transition"
              >
                <td className="px-4 py-4">
                  {editingId === expense._id ? (
                    <input
                      name="date"
                      value={expense.date}
                      onChange={(e) => handleChange(expense._id, e)}
                      className={inputStyles}
                    />
                  ) : (
                    <span className="text-gray-300">{expense.date}</span>
                  )}
                </td>

                <td className="px-6 py-4">
                  {editingId === expense._id ? (
                    <div className="relative">
                      <select
                        name="category"
                        value={expense.category}
                        onChange={(e) => handleChange(expense._id, e)}
                        className={`${inputStyles} appearance-none pr-10`}
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  ) : (
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {expense.category}
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {editingId === expense._id ? (
                    <input
                      name="price"
                      value={expense.price}
                      onChange={(e) => handleChange(expense._id, e)}
                      className={inputStyles}
                    />
                  ) : (
                    <span className="text-gray-300">₹ {expense.price}</span>
                  )}
                </td>

                <td className="px-6 py-4 text-gray-800">
                  {editingId === expense._id ? (
                    <input
                      name="item"
                      value={expense.item}
                      onChange={(e) => handleChange(expense._id, e)}
                      className={inputStyles}
                    />
                  ) : (
                    <span className="text-gray-300">{expense.item}</span>
                  )}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {editingId === expense._id ? (
                      <button
                        onClick={() => updateExpense(expense)}
                        className="p-2 rounded-lg hover:bg-green-500/20 text-green-400 transition"
                      >
                        <Check size={18} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(expense)}
                        className="p-2 rounded-lg hover:bg-gray-800 transition"
                      >
                        <Pencil size={18} />
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(expense)}
                      className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            <tr className="border-t border-gray-800">
              <td colSpan={5} className="p-4">
                <button
                  onClick={handleNewExpense}
                  className="w-full border border-dashed border-gray-700 rounded-xl py-4 text-gray-400 hover:bg-[#151923] hover:text-white transition"
                >
                  + Add New Expense
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
