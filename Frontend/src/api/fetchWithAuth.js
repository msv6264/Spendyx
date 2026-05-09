export async function updExpense(expense, editingId, token) {
  const apiResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/expense/update/${editingId}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        date: expense.date,
        category: expense.category,
        price: expense.price,
        item: expense.item,
      }),
    }
  );

  return apiResponse;
}

export async function newExp(expense, token) {
    const apiResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/expense/create`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(expense),
        },
      );

    return apiResponse;
}

export async function delExp(delId, token) {
    const apiResponse = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/expense/delete/${delId}`,

      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return apiResponse
  };


export async function getAllExpenses(token) {
  const apiResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/expense`,

    {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    }
  );

  const data = await apiResponse.json();

  return data;
}