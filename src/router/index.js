import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
// import Home from '@/pages/home'
// import Article from '@/pages/article'
// import Publish from '@/pages/publish'
import { AuthRoute } from '@/components/AuthRoute'
import {createBrowserRouter} from 'react-router-dom'
import { Suspense, lazy } from 'react'

// 1. lazy函数对组件进行导入
const Home = lazy(() => import('@/pages/home'))
const Article = lazy(() => import('@/pages/article'))
const Publish = lazy(() => import('@/pages/publish'))

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthRoute><Layout></Layout></AuthRoute>,
        children:[
            {
                index: true,
                element: <Suspense fallback={'加载中'}><Home /></Suspense>
              },
              {
                path: 'article',
                element: <Suspense fallback={'加载中'}><Article /></Suspense>
              },
              {
                path: 'publish',
                element: <Suspense fallback={'加载中'}><Publish /></Suspense>
              }
        ]

        
    },
    {
        path:"/login",
        element:<Login></Login>
    }
])

export default router