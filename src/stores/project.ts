import { StateCreator } from "zustand";
import { getProjects, Project } from "services/project";

export interface ProjectState {
  projects: Project[];
  fetchProjects: () => Promise<Project[]>;
}

export const createProjectSlice: StateCreator<ProjectState> = (set) => ({
  projects: [],
  fetchProjects: async () => {
    const res = await getProjects();
    const projects = res.filter((item) => !item.inbox_project);
    set({ projects });
    return projects;
  },
});
