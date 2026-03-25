export const getCmsList = async (language = "en") => {
  const res = await fetch(
    "http://43.205.18.14:8091/v1/customer_app/cms/cms_list",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": language, // 👈 key part
        // Authorization: "Bearer YOUR_TOKEN",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch CMS list");
  }

  return await res.json();
};