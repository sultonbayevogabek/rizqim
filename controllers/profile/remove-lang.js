module.exports = async (req, res) => {
   const langId = req.params.id
   await req.psql.languages.destroy({
      where: {
         id: langId
      }
   })
   res.status(200).send({
      ok: true,
      message: `Til olib tashlandi`
   })
}