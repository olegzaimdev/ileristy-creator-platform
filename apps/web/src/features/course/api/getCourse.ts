import type { CourseResponse } from "../types/course";

export class GetCourseError extends Error {
  constructor(readonly status?: number) {
    super(
      status !== undefined
        ? `Failed to get course (${status})`
        : "Could not reach the course API",
    );
    this.name = "GetCourseError";
  }
}

/** Course catalog changes rarely, so responses are cached and refreshed hourly (ISR). */
const REVALIDATE_SECONDS = 3600;

/** `GET /api/courses/{slug}`. Server-only: relies on Next's fetch cache. */
export async function getCourse(slug: string): Promise<CourseResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_CORE_API_URL is not configured");
  }

  let response: Response;
  try {
    response = await fetch(`${baseUrl}/api/courses/${encodeURIComponent(slug)}`, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
  } catch {
    throw new GetCourseError();
  }

  if (!response.ok) {
    throw new GetCourseError(response.status);
  }
  return response.json();
}
