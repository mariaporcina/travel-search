// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Location } from "@/types";
import locations from "@/locations";

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<Location[] | undefined>,
) {

  const id = req.query.id;

  console.log('query', id);

  const selected = locations.find((loc) => loc.id === Number(id));

  const nearby = locations.filter(loc => {
    if(selected && loc.id !== selected.id){
      const latDiff = selected.latitude - loc.latitude;
      const lngDiff = selected.longitude - loc.longitude;

      const distance = latDiff * latDiff + lngDiff * lngDiff;

      return distance < 120;
    }
  });

  const top5Nearby = nearby.slice(0, 5)

  res.status(200).json(top5Nearby);
}