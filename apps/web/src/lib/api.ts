import { getCookie } from "./utils";

type ApiOptions = RequestInit & { csrf?: boolean };

export async function apiFetch(input: string, options: ApiOptions = {}) {
  const { csrf = true, headers, ...rest } = options;
  const init: RequestInit = {
    credentials: "include",
    ...rest,
    headers: {
      ...(headers || {}),
    },
  };

  const method = (init.method || "GET").toUpperCase();
  const needsCsrf = csrf && !["GET", "HEAD", "OPTIONS"].includes(method);
  if (needsCsrf) {
    (init.headers as Record<string, string>)["X-CSRFToken"] = getCookie("csrftoken") || "";
    (init.headers as Record<string, string>)["Content-Type"] =
      (init.headers as Record<string, string>)["Content-Type"] || "application/json";
  }

  return fetch(input, init);
}
