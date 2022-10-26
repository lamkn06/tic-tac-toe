import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";

const MainPage = lazy(() => import("./pages/"));

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Suspense fallback={<></>}>
          <Routes>
            <Route index element={<MainPage />}></Route>
          </Routes>
        </Suspense>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
