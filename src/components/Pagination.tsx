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
            : "border-[#d9c6b3] text-[#5b3b2e]"
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
              ? "border-[#5b3b2e] bg-[#5b3b2e] text-white"
              : "border-[#d9c6b3] text-[#5b3b2e]"
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
            : "border-[#d9c6b3] text-[#5b3b2e]"
        )}
      >
        Next
      </Link>
    </nav>
  );
}

