import React from "react";
import { MoviesSection } from "../components/MoviesSection/MoviesSection";
import { PageLayout } from "../layout/PageLayout";

export const MoviesPage = () => {
  return (
    <PageLayout title="Movies">
      <MoviesSection />
    </PageLayout>
  );
};
