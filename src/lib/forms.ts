const API_URL = import.meta.env.VITE_FORMS_API_URL as string;

interface SubmitOptions {
  formType: string;
  data: Record<string, string>;
}

export async function submitForm({ formType, data }: SubmitOptions): Promise<{ message: string }> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, site: "oifi", ...data }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }
  return json;
}
