import { useEffect, useState } from "react";

const TOKEN =
  "patihQgf0IUkPe0Jd.bf94b6a5ac6c69ba2de51fa60fe42e4cd3d09b0c8347a6bcbafe8c18a34582a8";
const API_BASE_URL = "https://api.airtable.com/v0/app6DhxHEm83F85Z3";

type ResponseState<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

// useState<number>(0), useRef<HTMLInputElement>(null)
// eslint-disable-next-line @typescript-eslint/ban-types
// export const useApi = <T>(source: string | Function) => {
export const useApi = <T>(source: string) => {
  const [state, setState] = useState<ResponseState<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        // if (typeof source === "string") {
        //   //
        // } else {
        //   await axios.get<T>(source);
        // }

        const response = await fetch(`${API_BASE_URL}${source}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        if (response.ok) {
          const data = (await response.json()) as T;

          setState({
            data: data,
            isLoading: false,
            isError: false,
          });
        } else {
          setState({
            data: undefined,
            isError: true,
            isLoading: false,
          });
        }
      } catch {
        setState({
          data: undefined,
          isError: true,
          isLoading: false,
        });
      }
    };

    void loadData();
  }, []);

  return state;
};
