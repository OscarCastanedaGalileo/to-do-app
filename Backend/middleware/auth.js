function authMiddleware(req, res, next) {
  const key = req.headers['123'];
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}
module.exports = authMiddleware;