import { allowPathsList } from "./constants.ts";

export const checkPath = (path: any) => {
  return allowPathsList.find((item: any) => item.path === path);
};

export const response = (data: any, message: string | null = null) => {
  let response: { message?: string; data?: any } = {};

  if (message) {
    response.message = message;
  }

  if (data) {
    response.data = data;
  }

  return new Response(
    JSON.stringify(response),
    { headers: { "Content-Type": "application/json" } },
  );
};

export const pick = (obj: any, fields: string[]) => {
  const result: any = {};

  fields.forEach((field) => {
    if (obj.hasOwnProperty(field)) {
      result[field] = obj[field];
    }
  });
  return result;
};
