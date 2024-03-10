import Link from "next/link"
import { MoonIcon } from "@chakra-ui/icons"
import { Text } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span `
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-heigth: 20px;
    padding: 10px;
`

const Logo = () => (
    <Link href='/'>
        <LogoBox>
            <MoonIcon />
            <Text
                color='gray.800'
                fontFamily="M PLUS Rounded 1c"
                fontWeight='bold'
                ml={3}
            >
                Mar de luna
            </Text>
        </LogoBox>
    </Link>
)

export default Logo