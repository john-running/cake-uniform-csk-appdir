//app/api/geo/route.ts
import { geolocation, ipAddress } from "@vercel/edge";

export const runtime = "edge";

export function GET(request: Request) {
  const { city, country, latitude, longitude, countryRegion, flag } =
    geolocation(request);
  const ip = ipAddress(request) || "unknown";
  return new Response(
    JSON.stringify({
      city,
      countryRegion,
      country,
      flag,
      latitude,
      longitude,
      ip,
    }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
