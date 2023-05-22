import { v4 as uuidv4 } from "uuid";
import { request } from "./_request";
import { syncBaseParams } from "./_base";

export interface Project {
  child_order: number;
  collapsed: boolean;
  color: string;
  id: string;
  inbox_project: boolean;
  is_archived: boolean;
  is_deleted: boolean;
  is_favorite: boolean;
  name: string;
  parent_id: string | null;
  shared: boolean;
  sync_id: string | null;
  view_style: string;
}

export function getProjects(): Promise<Project[]> {
  const payload = {
    ...syncBaseParams,
    resource_types: ["projects"],
  };

  return request({
    path: "/API/v9.0/sync",
    method: "POST",
    data: payload,
  }).then((res) => res.projects);
}

export interface AddProjectPayload {
  name: string;
  color: string;
  is_favorite: boolean;
  view_style: string;
  parent_id: number | null;
  child_order: number;
}

export function addProject(data: AddProjectPayload): Promise<void> {
  const payload = {
    ...syncBaseParams,
    commands: [{ type: "project_add", args: data, uuid: uuidv4() }],
  };

  return request({
    path: "/API/v9.0/sync",
    method: "POST",
    data: payload,
  }).then((res) => res.projects);
}
