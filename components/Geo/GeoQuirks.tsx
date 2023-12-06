"use client";

import { useUniformContext } from "@uniformdev/canvas-next-rsc/component";
import { useEffect } from "react";

export const GeoQuirks = () => {
  const { context } = useUniformContext();

  useEffect(() => {
    if (!context) {
      return;
    }

    (async () => {
      const response = await fetch("/api/edge-geo/");

      if (response.ok) {
        const geo = (await response.json()) as {
          city: string;
          country: string;
          countryRegion: string;
        };

        context.update({
          quirks: {
            city: geo.city,
            country: geo.country,
            countryRegion: geo.countryRegion,
          },
        });
      }
    })();
  }, [context]);

  return <></>;
};
