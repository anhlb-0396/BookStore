import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Homepage from "./pages/Homepage";
import JobDetails from "./features/jobs/JobDetails";
import AppLayouts from "./ui/layouts/user/AppLayouts";
import Login from "./features/authentication/Login";
import Register from "./features/authentication/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import ResumeCreatePage from "./pages/ResumeCreatePage";
import ResumeDisplayPage from "./pages/ResumeDisplayPage";
import AgentLayouts from "./ui/layouts/agent/AgentLayouts";
import AppliesTable from "./features/agents/applies/AppliesTable";
import Unauthorize from "./pages/Unauthorize";
import JobsOfCompany from "./features/agents/jobs/JobsOfCompany";
import CreateJob from "./features/agents/jobs/CreateJob";
import NotFoundPage from "./pages/NotFoundPage";
import UpdateJob from "./features/agents/jobs/UpdateJob";
import Notification from "./features/notifications/Notification";
import AgentCompany from "./features/agents/companies/AgentCompany";
import { UserCVProvider } from "./contexts/UserCVContext";
import { SocketProvider } from "./contexts/SocketContext";
import { CartProvider } from "./contexts/CartContext";
import ExpectJobs from "./features/expectedJobs/ExpectJobs";
import PaymentStepper from "./features/payments/PaymentStepper";
import PaymentHistory from "./features/payments/PaymentHistory";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      // main: "rgba(53, 162, 235, 1)",
      main: "#051650",
    },
    error: {
      main: "rgba(255, 99, 132, 1)",
    },
    success: {
      main: "rgba(75, 192, 192, 1)",
    },
    warning: {
      main: "rgba(255, 206, 86, 1)",
    },
    info: {
      main: "rgba(54, 162, 235, 1)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <Routes>
                <Route element={<AppLayouts />}>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/payment" element={<PaymentStepper />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Register />} />
                  <Route
                    path="/history"
                    element={
                      <ProtectedRoute>
                        <PaymentHistory />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="/unauthorize" element={<Unauthorize />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
