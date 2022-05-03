module.exports = async (req, res) => {
   const expId = req.params.id
   await req.psql.experiences.destroy({
      where: {
         id: expId
      }
   })
   res.status(200).send({
      ok: true,
      message: `Ish joyi olib tashlandi`
   })
}