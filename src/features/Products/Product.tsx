import { useEffect, useState } from "react";

const TOKEN =
  "patihQgf0IUkPe0Jd.bf94b6a5ac6c69ba2de51fa60fe42e4cd3d09b0c8347a6bcbafe8c18a34582a8";

interface ProductDto {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
  };
}

interface ProductResponse {
  records: ProductDto[];
}

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

type Props = {
  id: string;
};

// recO0oFJq1HetQPt0
export const Product = ({ id }: Props) => {
  // TODO: replace 3 state cells to one object
  // const [data, setData] = useState<ProductDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const [state, setState] = useState<ResponseState<ProductDto>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const { data, isLoading, isError } = state;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/app6DhxHEm83F85Z3/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        if (response.ok) {
          const data = (await response.json()) as ProductDto;

          // setData(data.records);
          setState({
            data: data,
            isLoading: false,
            isError: false,
          });
        } else {
          // setIsError(true);
          setState({
            data: undefined,
            isError: true,
            isLoading: false,
          });
        }
      } catch {
        // error
        // setIsError(true);
        setState({
          data: undefined,
          isError: true,
          isLoading: false,
        });
      }
    };

    void loadData();

    // void fetch("https://api.airtable.com/v0/app6DhxHEm83F85Z3/products", {
    //   headers: {
    //     Authorization: `Bearer ${TOKEN}`,
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => setData(data.records)); // { records: [] }
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <p>Name: {data.fields.name}</p>
    </div>
  );
};
