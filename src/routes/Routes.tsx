import { Route, Routes } from "react-router-dom";
import { ListBolao } from "../components/Bolao";
import { CreateBolao } from "../components/Bolao/create";
import { CreateAccount } from "../components/CreateAccount";
import { Dashboard } from "../components/Dashboard";
import { Jogos } from "../components/Jogos";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";

export function RoutesLayout() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bolao" element={<ListBolao />} />
        <Route path="/create-bolao" element={<CreateBolao />} />
        <Route path="/games" element={<Jogos />} />
      </Route>
    </Routes>
  )
}