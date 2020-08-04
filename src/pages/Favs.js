import React from 'react'
import { FavsWithQuery } from '../container/GetFavs'
import { Layout } from '../components/Layout'

export default () => (
  <Layout
    title='Tus Favoritos'
    subtitle='Aqui puedes encontrar tus favoritos'
  >
    <FavsWithQuery />
  </Layout>
)
