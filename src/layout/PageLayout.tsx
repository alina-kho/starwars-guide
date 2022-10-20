import React, { FC } from "react";
import "./PageLayout.scss";

interface PageLayoutProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  );
};
