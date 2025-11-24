import Link from "next/link";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath?: string;
};

export function Pagination({ page, totalPages, basePath = "/episodes" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }).map((_, index) => index + 1);

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm">
      <Link
        href={`${basePath}?page=${Math.max(1, page - 1)}`}
        className={cn(
          "rounded-full border px-4 py-2 uppercase tracking-[0.3em]",
          page === 1
            ? "pointer-events-none border-[#ddd] text-[#aaa]"
            : "border-[#cfe3d3] text-[#1f4a3a]"
        )}
      >
        Prev
      </Link>
      {pages.map((pageNumber) => (
        <Link
          key={pageNumber}
          href={`${basePath}?page=${pageNumber}`}
          className={cn(
            "rounded-full border px-4 py-2 uppercase tracking-[0.3em]",
            page === pageNumber
              ? "border-[#1f4a3a] bg-[#1f4a3a] text-white"
              : "border-[#cfe3d3] text-[#1f4a3a]"
          )}
        >
          {pageNumber}
        </Link>
      ))}
      <Link
        href={`${basePath}?page=${Math.min(totalPages, page + 1)}`}
        className={cn(
          "rounded-full border px-4 py-2 uppercase tracking-[0.3em]",
          page === totalPages
            ? "pointer-events-none border-[#ddd] text-[#aaa]"
            : "border-[#cfe3d3] text-[#1f4a3a]"
        )}
      >
        Next
      </Link>
    </nav>
  );
}

