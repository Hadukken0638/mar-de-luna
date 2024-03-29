import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import theme from "../lib/theme";

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website