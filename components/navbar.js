import Logo from "./logo";
import NextLink from 'next/link'
import { 
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'glassTeal' : undefined}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position='fixed'
            as="nav"
            w='100%'
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display='flex'
                p={2}
                maxW='container.md'
                warp='warp'
                align='center'
                justify='space-between'
            >
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'tigther'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex'}}
                    width={{ base: "full", md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href='/' path={path}>
                        Home
                    </LinkItem>
                    <LinkItem href='/servicios' path={path}>
                        Servicios
                    </LinkItem>
                    
                    <LinkItem href='/ubicacion' path={path}>
                        Ubicacion
                    </LinkItem>
                </Stack>

                <Box flex={1} align='right'>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none'}}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton 
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant='outline'
                                aria-label="Menu Options"
                            />
                            <MenuList>
                                <NextLink href='/' passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href='/servicios' passHref>
                                    <MenuItem as={Link}>Servicios</MenuItem>
                                </NextLink>
                                <NextLink href='/ubicacion' passHref>
                                    <MenuItem as={Link}>Ubicacion</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>        
        </Box>
    )
}

export default Navbar