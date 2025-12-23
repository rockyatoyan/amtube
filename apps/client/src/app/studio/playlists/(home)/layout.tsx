import RowNav from "@/features/row-nav/row-nav";
import StudioPageHeading from "@/features/studio-page-heading/studio-page-heading";
import { StudioRoutes } from "@/shared/config/routes/studio.routes";

import { ReactNode } from "react";

export default function StudioPlaylistsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <StudioPageHeading>Playlists</StudioPageHeading>
      <RowNav
        items={[
          { isHome: true, label: "Channel", pathname: StudioRoutes.PLAYLISTS },
          { label: "User", pathname: StudioRoutes.PLAYLISTS + "/user" },
        ]}
      />
      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}
