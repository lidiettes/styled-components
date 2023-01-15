import React from 'react'
import { Title } from '../../ui'
import { LogoAnimate } from '../../ui/Images.style'
import { Main } from '../../ui/MainContainer.style'
import ReactLogo from '../../assets/react.svg'
import { FlexLogo } from '../../ui/Flex.style'

const Animation = () => {
  return (
    <Main>
        <Title> Pues otra pagina</Title>
        <FlexLogo>

            <LogoAnimate src={ReactLogo} />
        </FlexLogo>
    </Main>
  )
}

export default Animation