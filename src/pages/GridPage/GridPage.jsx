import React from 'react'
import { Main } from '../../ui'
import { Grid, Menu, Sidebar, Content, Footer } from '../../ui/Grid.style'

const GridPage = () => {
  return (
    <Main>
      <Grid>
        <Menu>Menu</Menu>
        <Sidebar>sidebar</Sidebar>
        <Content>Content</Content>
        <Footer>footer</Footer>
      </Grid>
    </Main>
  )
}

export default GridPage