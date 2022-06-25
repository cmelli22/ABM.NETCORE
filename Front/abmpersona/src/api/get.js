
  export const getApiData = async () => {
        const response = await fetch(
          "https://localhost:44331/api/personas"
        ).then((response) => response.json());
        return response;
      };