import { Outlet } from "react-router-dom"
import { TopHeading } from "../../ui"


const TopTitle = () => {
    return (
        <>
        <TopHeading>Lidia Frías</TopHeading>
        <Outlet />
        </>
    )
}

export default TopTitle