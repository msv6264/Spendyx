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

  if (apiResponse.status === 401) {
    localStorage.removeItem("spendyx-token");
    window.location.href = "/login";
    return null;
  }

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

    if (apiResponse.status === 401) {
      localStorage.removeItem("spendyx-token");
      window.location.href = "/login";
      return null;
    }

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

    if (apiResponse.status === 401) {
      localStorage.removeItem("spendyx-token");
      window.location.href = "/login";
      return null;
    }

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

  if (apiResponse.status === 401) {
    localStorage.removeItem("spendyx-token");
    window.location.href = "/login";
    return null;
  }

  const data = await apiResponse.json();

  return data;
}