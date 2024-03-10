import { extendTheme } from "@chakra-ui/react"

const styles = {
    global: () => ({
        body: {
            bg: '#f0e7db'
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                TextDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: () => ({
            color: '#3d7aed',
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    grassTeal: "#88ccca"
}

const config = {}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme