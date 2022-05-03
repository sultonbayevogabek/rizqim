module.exports = async (req, res) => {
   const eduId = req.params.id
   await req.psql.educations.destroy({
      where: {
         id: eduId
      }
   })
   res.status(200).send({
      ok: true,
      message: `O'qish joyi olib tashlandi`
   })
}