import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListFavs } from '../components/ListFavs'

const GET_FAVS = gql`
query getFavs {
  favs {
    id,
    categoryId,
    src,
    likes,
    userId
  }
}
`

const renderProp = ({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error! ...</p>

    const { favs } = data

    return <ListFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
