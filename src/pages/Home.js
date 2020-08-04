import React from 'react'
import { ListaCategorias } from '../components/ListCategories'
import { ListPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de Mascotas'
      subtitle='Con Instapet puedes encontrar fotos de animales domesticos muy bonitos'
    >
      <ListaCategorias />
      <ListPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
