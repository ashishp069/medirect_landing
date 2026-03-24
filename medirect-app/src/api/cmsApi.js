export const getCmsList = async () => {
  const res = await fetch(
    "http://43.205.18.14:8091/v1/customer_app/cms/cms_list",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add this if your API needs auth
        // Authorization: "Bearer YOUR_TOKEN",
      },
    }
  );

  return await res.json();
};