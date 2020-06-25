export const injectMeta = () => {
    const meta = document.createElement('meta')
    
    meta.name = 'viewport'
    meta.content = 'initial-scale=1.0, width=device-width'
    document.getElementsByTagName('head')[0].appendChild(meta);
    // <meta name="viewport" content="width=device-width"></meta>
}

export default injectMeta