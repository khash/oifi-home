const API_URL = "https://ozgivaw2k7.execute-api.us-east-2.amazonaws.com/prod/submit";

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

  const text = await res.text();
  const json = text ? JSON.parse(text) : {};
  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }
  return json;
}
