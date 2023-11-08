import axios from "axios";

export const API_BASE_URL = "https://api.airtable.com/v0/app6DhxHEm83F85Z3";
export const TOKEN =
  "patihQgf0IUkPe0Jd.bf94b6a5ac6c69ba2de51fa60fe42e4cd3d09b0c8347a6bcbafe8c18a34582a8";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
