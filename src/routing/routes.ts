export const routes = {
    app: {
        name: "/app",
        next: null,
    },
    menu: {
        name: "/menu",
        next: {
            durations: {
                name: "/durations",
                next: null,
            },
            settings: {
                name: "/settings",
                next: null,
            },
            info: {
                name: "/info",
                next: null,
            },
        },
    },
}
