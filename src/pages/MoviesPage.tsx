import React from "react";
import { MoviesSection } from "../components/Sections/MoviesSection";
import { PageLayout } from "../layout/PageLayout";

export const MoviesPage = () => {
  return (
    <PageLayout title="Movies">
      <MoviesSection />
    </PageLayout>
  );
};
