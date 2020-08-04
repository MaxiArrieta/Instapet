import React, {useState, useEffect, Fragment} from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState((false))

  useEffect(() => {
    setLoading(true)
    window.fetch('https://instapet-server-5zfr4ei1j.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategorias(response)
        setLoading(false)
      })
  }, [])

  return { categorias, loading }
}

 const ListaCategoriasComponent = () => {
  const { categorias, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const nowShowFixed = window.scrollY > 200
      showFixed !== nowShowFixed && setShowFixed(nowShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading' ><Category /></Item>
          : categorias.map(category => <Item key={category.id}
        ><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
    )
}

export const ListaCategorias = React.memo(ListaCategoriasComponent)
