import React from 'react'
import { Main, Title, SubTitle, TextBody, LinkText } from '../../ui/index'


const Home = () => {
  return (
    <Main>
        <Title> My Portfolio </Title>
        <SubTitle>  
                • I am training as Full Stack Developer with a soft spot for design at Assembler Institute of Technology. I love React!
                • Tech Support, with 12 years of experience in the Telefónica group, one of the most important telecommunications companies worldwide. Working fully remote since 2013. I have held different positions and responsibilities always in the tech field, having the opportunity to participate in great challenges.
                • Bachelor of Economics, thanks to studying economics I love maths, optimization, strategy and problem solving. 
                • I am proactive and defender of communication and collaborative environments. 
                • My passions are danish design, art and travel. Pasta and hygge are my favourite words! 
        </SubTitle>

        <TextBody>Soft skill? Pelaso </TextBody>
        <TextBody blueText>blablablablablablabalbablablablablablablabalbablablablablablablabalba</TextBody>
        <TextBody redText>blablablablablablabalbablablablablablablabalbablablablablablablabalba</TextBody>
        <LinkText to="Class"> Next Page </LinkText>
      
    </Main>
    
  )
}

export default Home