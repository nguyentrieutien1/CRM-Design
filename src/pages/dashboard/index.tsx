import React, { ReactElement } from "react";
import { PageLayout } from "src/components/layout/page-layout";
import Dashboard from "src/components/pages/dasboard/dashboard";

export default function DashboardPage() {
  return <Dashboard />
}
// eslint-disable-next-line react/display-name
DashboardPage.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
