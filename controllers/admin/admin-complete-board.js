const path = require('path')

module.exports = async (req, res) => {
   const { board_id, freelancer_id, project_link } = req.body

   await req.psql.boards.update({
      is_completed: true,
      freelancer_id,
      project_link
   }, {
      where: {
         id: board_id
      }
   })

   res.redirect('/admin/boards')
}