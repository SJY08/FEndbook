import { createBrowserRouter, RouterProvider } from "react-router"
type Props = {
    router: ReturnType<typeof createBrowserRouter>
}
/**
 * @description Providers component
 * @param router - React Router
 */
export const Providers = ({ router }: Props) => {
    return <RouterProvider router={router} />
}
