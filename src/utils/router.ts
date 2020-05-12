export const getPathNameLevel = (pathname: string, level: number) =>
    pathname === "/" && level === 0
        ? "/"
        : pathname.split("/").filter(Boolean)[level]
