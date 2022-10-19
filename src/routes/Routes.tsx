import { Route, Routes } from "react-router-dom";
import { ListClan } from "../components/Clan";
import { Dashboard } from "../components/Dashboard";
import { Jogos } from "../components/Jogos";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";

export function RoutesLayout() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="/clan" element={<ListClan />} />
        <Route path="/jogos" element={<Jogos />} />
      </Route>
    </Routes>
  )
}