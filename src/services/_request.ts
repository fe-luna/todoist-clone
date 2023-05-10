export interface Options {
  path: string;
  method?: "POST" | "GET";
  data?: Record<string, any>;
}

export function request(options: Options) {
  const { path, method = "get", data = {} } = options;
  return fetch(path, {
    headers: {
      "content-type": "application/json",
      "X-Csrftoken": String(Date.now()),
    },
    body: method === "POST" ? JSON.stringify(data) : "",
    method: method,
    mode: "cors",
    credentials: "include",
  }).then(async (res) => {
    const json = await res.json();
    if (!res.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}
