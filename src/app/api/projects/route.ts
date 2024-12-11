import projects from "./projects";

export async function GET() {
  return Response.json(projects);
}
