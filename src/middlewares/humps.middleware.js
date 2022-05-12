import humps from 'humps';

export default () => (req, res, next) => {
    req.body = humps.camelizeKeys(req.body)
    req.param = humps.camelizeKeys(req.param)
    req.query = humps.camelizeKeys(req.query)

    next()
}