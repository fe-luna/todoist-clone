import { request } from "./_request";
import { syncBaseParams } from "./_base";

export interface Todo {
  added_at: string;
  added_by_uid: string;
  assigned_by_uid: string | null;
  checked: boolean;
  child_order: number;
  collapsed: boolean;
  completed_at: string | null;
  content: string;
  day_order: number;
  description: string;
  due: { date: string; is_recurring: false; string: string } | null;
  duration: string | null;
  id: string;
  is_deleted: boolean;
  labels: string[];
  parent_id: string | null;
  priority: number;
  project_id: string;
  responsible_uid: string | null;
  section_id: string | null;
  sync_id: string | null;
  user_id: string;
}

export function getTodos(): Promise<Todo[]> {
  const payload = {
    ...syncBaseParams,
    resource_types: ["items"],
  };

  return request({
    path: "/API/v9.0/sync",
    method: "POST",
    data: payload,
  }).then((res) => res.items);
}
