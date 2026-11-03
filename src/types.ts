export type ProjectFile = { path: string; content: string };
export type Project = { id: string; name: string; framework: string; updatedAt: number; files: ProjectFile[] };