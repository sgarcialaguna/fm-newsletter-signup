// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography, presetUno, presetWebFonts,
    transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            neutral100: '#fff',
            neutral400: 'hsl(231, 7%, 60%)',
            neutral700: 'hsl(235, 18%, 26%)',
            primary: 'hsl(4, 100%, 67%)',
            accent: 'hsl(344, 100%, 67%)',
            error: '#ffe8e6',
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                'body': 'Roboto:400,700'
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
