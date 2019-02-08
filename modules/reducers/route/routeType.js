// @flow
export type RouteType = {
    type: string,
    [string]: string | number,
};

export type PageType = {
    page: string,
    params: {
        [string]: string | number,
    },
};
