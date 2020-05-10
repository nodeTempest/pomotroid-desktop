import { RefObject, useEffect } from "react"

export const useOnClickOutside = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: (e: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            if (ref.current && ref.current.contains(e.target as HTMLElement)) {
                return
            }

            callback(e)
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, callback])
}
