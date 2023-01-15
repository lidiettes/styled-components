import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FlexLinks } from '../../ui/Flex.style'
import { Main, Title, TextBody, TextBodySecond, TextBodyThird, Button, SubmitButton } from '../../ui/index'



const Class = () => {

    const navigate = useNavigate();
   
    
  return (
    <Main>
        <Title>Otra pagina </Title>
        <TextBody className='text__body--p'> Otro texto </TextBody>
        <TextBodySecond> Otro texto </TextBodySecond>
        <TextBodyThird> Otro texto </TextBodyThird>

        <FlexLinks>
            <Button onClick={()=> navigate(-1)}>Back</Button>
            <SubmitButton as={Link} to='/animation' type='submit'>Next page</SubmitButton>
        </FlexLinks>
        
    </Main>
  )
}

export default Class

