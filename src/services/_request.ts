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
    },
    body: method === "POST" ? JSON.stringify(data) : "",
    method: method,
    mode: "cors",
    credentials: "include",
  }).then((res) => res.json());
}
