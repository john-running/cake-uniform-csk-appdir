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
      const response = await fetch("https://next.joincake.com/api/edge-geo/");

      if (response.ok) {
        const geo = (await response.json()) as {
          city: string;
        };

        context.update({
          quirks: {
            city: geo.city,
          },
        });
      }
    })();
  }, [context]);

  return <></>;
};
