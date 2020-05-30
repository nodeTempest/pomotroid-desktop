import { StagesType } from "@state"
import { MINUTE } from "@constants"

const messages = {
    work: {
        title: "Break Finished",
        body: (stageDuration: number) =>
            `Begin working for ${stageDuration} minutes.`,
    },

    sbreak: {
        title: "Work Round Complete",
        body: (stageDuration: number) =>
            `Begin a ${stageDuration} minute short break.`,
    },

    lbreak: {
        title: "Work Round Complete",
        body: (stageDuration: number) =>
            `Begin a ${stageDuration} minute long break.`,
    },
}

export const showNotification = (stage: StagesType, stageDuration: number) => {
    const title = messages[stage].title
    const body = messages[stage].body(stageDuration / MINUTE)

    new window.Notification(title, {
        body,
    })
}
