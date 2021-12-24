// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Teste API',
    method: req.method,
    name: req.query.name,
    age: +req.query.age
  })
}
