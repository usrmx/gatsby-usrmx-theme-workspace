import React from "react";
import { DEFAULT_THEME } from "../constants";
import { ThemeValue } from "../types";
import { PaginationLink } from "./PaginationLink";

interface PaginationProps {
  currentPage: number;
  pagesCount: number;
  routePath: string;
  pageRoutePath?: string;
  theme?: ThemeValue;
}

export const Pagination = ({
  currentPage,
  pagesCount,
  routePath,
  pageRoutePath = "/page",
  theme = DEFAULT_THEME,
}: PaginationProps) => {
  const fullPageRoutePath = `${routePath}${pageRoutePath}`;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pagesCount;
  const prevPageIndex = currentPage - 1;
  const prevPagePath =
    prevPageIndex === 1 ? routePath : `${fullPageRoutePath}/${prevPageIndex}`;
  const nextPagePath = `${fullPageRoutePath}/${currentPage + 1}`;
  const visiblePagesRange = 2;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2em",
      }}
    >
      <PaginationLink
        key="page-prev"
        to={prevPagePath}
        theme={theme}
        isDisabled={isFirst}
      >
        &laquo;
      </PaginationLink>
      {Array.from({ length: pagesCount }).map((_, index) => {
        const pageNumber = index + 1;

        return pageNumber >= currentPage - visiblePagesRange &&
          pageNumber <= currentPage + visiblePagesRange ? (
          <PaginationLink
            theme={theme}
            isActive={currentPage === pageNumber}
            key={`page-${pageNumber}`}
            to={
              pageNumber === 1
                ? routePath
                : `${fullPageRoutePath}/${pageNumber}`
            }
          >
            {pageNumber}
          </PaginationLink>
        ) : null;
      })}
      <PaginationLink
        key="page-next"
        to={nextPagePath}
        theme={theme}
        isDisabled={isLast}
      >
        &raquo;
      </PaginationLink>
    </div>
  );
};
