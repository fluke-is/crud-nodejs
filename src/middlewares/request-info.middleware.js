export default () => (req, res, next) => {
        console.info(`[${new Date}]: {URI: ${req.originalUrl}, Methon: ${req.method}}`)
        next()
}