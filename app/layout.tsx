import "@/styles/globals.scss";
import { UniformContext } from "@uniformdev/canvas-next-rsc";
import { GeoQuirks } from "../components/Geo/GeoQuirks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UniformContext>
          {children}
          <GeoQuirks />
        </UniformContext>
      </body>
    </html>
  );
}
