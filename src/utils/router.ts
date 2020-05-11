export const getLevelName = (pathname: string, level: number) =>
    pathname === "/" && level === 0
        ? "/"
        : pathname.split("/").filter(Boolean)[level]
