import { Routes, Route } from "react-router-dom"
import { Auth } from "../components/pages/Auth"
import { Layout } from "../components/Layout"
import { Home } from "../components/pages/Home"
import { NewTransaction } from "../components/pages/Transaction/New"
import { EditTransaction } from "../components/pages/Transaction/Edit"
import { Transactions } from "../components/pages/Transaction/Transactions"
import { Account } from "../components/pages/Account"
import { NotFound } from "../components/pages/NotFound"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<Auth type="signin" />} />
            <Route path="/signup" element={<Auth type="signup" />} />
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/transacoes">
                    <Route index element={<Transactions />} />
                    <Route path="nova" element={<NewTransaction />} />
                    <Route path=":id/editar" element={<EditTransaction />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        
    )
}