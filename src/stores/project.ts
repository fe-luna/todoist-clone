import { StateCreator } from "zustand";
import { getProjects, Project } from "services/project";

export interface ProjectState {
  projects: Project[];
  fetchProjects: () => Promise<Project[]>;
  getProjectById: (projectId: string) => Project | undefined;
  getProjectsExceptInbox: () => Project[];
}

export const createProjectSlice: StateCreator<ProjectState> = (set, get) => ({
  projects: [],
  fetchProjects: async () => {
    const projects = await getProjects();
    set({ projects });
    return projects;
  },
  getProjectById: (projectId: string) =>
    get().projects.find((item) => item.id === projectId),
  getProjectsExceptInbox: () =>
    get().projects.filter((item) => !item.inbox_project),
});
