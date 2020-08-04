import React from 'react'
import { Image, Grid, Link } from './styles'
import PropTypes from 'prop-types'

export const ListFavs = ({ favs = [] }) => {
    return (
      <Grid>
        {
          favs.map(fav => {
              return (
                <Link key={fav.id} to={`/detail/${fav.id}`} >
                  <Image src={fav.src} />
                </Link>
              )
          })
        }
      </Grid>
    )
}

ListFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
