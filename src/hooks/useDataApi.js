import { useState, useEffect, useReducer } from 'react';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: (state.data || []).concat(action.payload),
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataApi = (facebookSdk, initialUrl, initialData) => {
  const [url, setUrl] = useState(() => initialUrl);
  const [shouldFetch, setShouldFetch] = useState(() => true);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    if (!facebookSdk || !shouldFetch) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        // const result = await axios(url);
        facebookSdk.api(url, resp => {
          if (resp.error) {
            dispatch({ type: 'FETCH_FAILURE' });
            console.error(resp.error);
            return;
          }

          console.log(resp);
          // fb.api(resp.paging.cursors.after, r => console.log(r));
          setUrl(resp.paging.next || null);
          dispatch({ type: 'FETCH_SUCCESS', payload: resp.data });
          setShouldFetch(false);
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [facebookSdk, shouldFetch]);
  console.log(state);
  return [state, setShouldFetch];
};

export default useDataApi;
