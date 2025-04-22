import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Start } from "./components/startpage";
import { SearchDog } from "./components/SearchDog";
import { DogDetails } from "./components/DogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "search",
        element: <SearchDog />,
      },
      {
        path: "dog/:breedId",
        element: <DogDetails />,
      },
    ],
  },
]); 