import s from "./Page.module.scss"

export const Page = ({ children }) => {
    return  (
        <div className={s.pageMainContainer}>{children}</div>     
    )
}