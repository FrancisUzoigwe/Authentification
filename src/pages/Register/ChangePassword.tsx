
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from '../../components/static/Button'
import InputProps from '../../components/reUse/inputs/InputProps'

const ChangePassword = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Title>Create New Password</Title>

                    <InputProps


                        password
                        password1="password"
                        password2="Please Enter New Password"


                        confirm
                        confirm1="password"
                        confirm2="Please confirm New Password"


                    />

                    <ButtonHolder>


                        <Space />
                        <Link to="/sign-in" style={{ textDecoration: "none" }} >
                            <Button
                                title="Request Reset"
                                bg="#228be6"
                                color="white"
                            />
                        </Link>
                    </ButtonHolder>
                </Main>
            </Container>
        </div>
    )
}

export default ChangePassword

const Space = styled.div`
flex: 1
`


const Title = styled.div`
font-weight: bold;
font-size: 24px;
margin: 20px 0;
`
/* 
const Line = styled.div`
border-bottom: 1px solid silver;
width: 28%;

` */

/* const Text2 = styled(Link)`
font-size: 12px;
margin-bottom: 16px ;
color: black;
text-decoration: none;
` */
/* 
const Text = styled.div`
font-size: 12px;
margin: 0 5px;
` */

/* const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
` */

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
padding: 20px 30px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
border-radius:5px;
`

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh
`