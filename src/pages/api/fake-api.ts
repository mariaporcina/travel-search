// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Location } from "@/types";
import locations from "@/locations";

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<Location[]>,
) {
  const keyWord = req.query.search;

  console.log('query', keyWord);
  
  let filtered: Location[] = [];

  if(keyWord && typeof keyWord === 'string') {
    filtered = locations.filter((loc) => loc.name.toLowerCase().includes(keyWord.toLowerCase()));
  }

  res.status(200).json(filtered);
}
