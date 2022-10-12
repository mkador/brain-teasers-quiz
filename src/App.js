import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Quiz from "./components/Quiz";
import QuizQuestions from "./components/QuizQuestions";
import Statistics from "./components/Statistics";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/quiz',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Quiz></Quiz>,
      },
      {
        path:'/quiz/:quizquestiosId',
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizquestiosId}`),
        element:<QuizQuestions></QuizQuestions>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
      {
        path:'/statistics',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>
      },
    ]
  },
])
function App() {
  return (
    
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
