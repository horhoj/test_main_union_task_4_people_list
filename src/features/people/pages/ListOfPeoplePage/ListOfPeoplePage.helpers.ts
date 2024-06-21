interface GetSearchParamsReturnValues {
  page?: number;
  search?: string;
}

export const getSearchParams = (searchParams: URLSearchParams): GetSearchParamsReturnValues => {
  const search = searchParams.get('search') ?? undefined;
  const pageFromSearchParams = searchParams.get('page') ?? undefined;
  let page: number | undefined = undefined;
  if (pageFromSearchParams) {
    const tmp = Number.parseInt(pageFromSearchParams);
    if (Number.isFinite(tmp)) {
      page = tmp;
    }
  }

  return {
    search,
    page,
  };
};
