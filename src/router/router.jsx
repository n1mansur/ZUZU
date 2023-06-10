import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../components/Layout/Layout'
import Home from '../components/MAIN/Home/Home'
import Basket from '../components/MAIN/Basket/Basket'
import Filials from '../components/MAIN/Filials/Filials'
import SingFilial from '../components/MAIN/SingFilial/SingFilial'
import About from '../components/MAIN/About/About'
import Contacts from '../components/MAIN/Contacts/Contacts'
import Ordering from '../components/MAIN/Ordering/Ordering'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function Router() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="ordering" element={<Ordering />} />
            <Route path="filials" element={<Filials />} />
            <Route path="filials/:id" element={<SingFilial />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}
