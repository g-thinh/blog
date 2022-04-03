import { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://dev.to/api/users/me", {
      headers: {
        "api-key": process.env.devToApiKey!,
      },
    });
    const result = await response.json();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).end();
    }
  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      throw error;
    }
  }
}
