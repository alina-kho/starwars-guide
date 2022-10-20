import React from "react";
import { CharactersSection } from "../components/CharactersSection";
import { PageLayout } from "../layout/PageLayout";

export const Characters = () => {
  return (
    <PageLayout title="Characters">
      <CharactersSection />
    </PageLayout>
  );
};
