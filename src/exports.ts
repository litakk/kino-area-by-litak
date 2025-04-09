export const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION || "",
  },
};
