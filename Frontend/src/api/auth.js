export async function loginUser(email, pass, type) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/${type}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  localStorage.setItem("spendyx-token", data.token);

  return data;
}
