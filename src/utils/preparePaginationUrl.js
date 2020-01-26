export function preparePaginatedApiUrl(uri, page) {
    let skip = (page !== 1) ? (page - 1) * 10 : 0;
    let url = uri + `?skip=${skip}&limit=${skip + 10}`;
    return url
}