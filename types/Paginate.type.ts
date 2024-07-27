export type PaginateType = {
  currentPage?: number
  startCount?: number
  endCount?: number
  pageSize?: number
  totalCount?: number
  totalPages?: number
  onNext?: () => void
  onPrev?: () => void
}
