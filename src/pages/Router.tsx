import { Routes, Route } from "react-router-dom";
import RegForm from "./sign-up/pages/reg-from/RegForm";

export default function Router() {
  return (
    <Routes>
      <Route path="/signup/regform" element={<RegForm />} />
    </Routes>
  );
}
