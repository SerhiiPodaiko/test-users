import {Suspense, lazy} from "react"
import {Route, Routes} from "react-router-dom"
import Preloader from "../ui/preloader/Peloader"
import UserList from "../pages/user-list/UserList"

const UserPosts = lazy(() => import("../pages/posts/UserPosts"))
const Notfound = lazy(() => import("../pages/not-found/Notfound"))

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<UserList />}/>
            <Route path="/user-posts/:id" element={
                <Suspense fallback={<Preloader />}>
                    <UserPosts />
                </Suspense>
            }/>
            <Route path="*" element={
                <Suspense fallback={<Preloader />}>
                    <Notfound />
                </Suspense>
            }/>
        </Routes>
    )
}

export default Router
