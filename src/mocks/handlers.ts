import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    // The "/pets" string is a path predicate.
    // Only the GET requests whose path matches
    // the "/pets" string will be intercepted.
    "/pets",
    // "https://api.airtable.com/v0/app6DhxHEm83F85Z3/products",
    // The function below is a "resolver" function.
    // It accepts a bunch of information about the
    // intercepted request, and decides how to handle it.
    ({ request, params, cookies }) => {
      return HttpResponse.json(["Tom", "Jerry", "Spike"]);
    }
  ),
];
