import React, { ReactElement } from "react";
import TopBar from "./page/top-bar";
type PageLayoutProps = React.PropsWithChildren<{}>;
export const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="p-3">
      <TopBar />
      <main className="mt-3">{children}</main>
    </div>
  );
};
