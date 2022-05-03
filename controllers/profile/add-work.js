const path = require('path')

module.exports = async (req, res) => {
   const months = [
      'yanvar',
      'fevral',
      'mart',
      'aprel',
      'may',
      'iyun',
      'iyul',
      'avgust',
      'sentabr',
      'oktabr',
      'noyabr',
      'dekabr'
   ]
   const years = []

   for (let i = 1990; i <= new Date().getFullYear(); i++) {
      years.push(i)
   }
   console.log(req.body)

   const { workPlace, workType, workStartYear, workStartMonth, workEndYear, workEndMonth, workAbout } = req.body

   if (workPlace.trim().length < 4) {
      return res.status(400).send({
         ok: false,
         message: `Ish joyining nomi kamida 4 ta belgidan iborat bo'lishi kerak`
      })
   }

   if (workType.trim().length < 4) {
      return res.status(400).send({
         ok: false,
         message: `Kim bo'lib ishlaganlik haqidagi maydonga kamida 4 ta belgi kiritilishi kerak`
      })
   }

   if (!years.includes(+workStartYear)) {
      return res.status(400).send({
         ok: false,
         message: `Ish boshlangan yilni kiritish kerak`
      })
   }

   if (!months.includes(workStartMonth)) {
      return res.status(400).send({
         ok: false,
         message: `Ish boshlangan oyni kiritish kerak`
      })
   }

   if (!years.includes(+workEndYear) && workEndYear !== 'hozirgacha') {
      return res.status(400).send({
         ok: false,
         message: `Ish tugallangan yilni kiritish kerak`
      })
   }

   if (years.includes(+workEndYear) && !months.includes(workEndMonth)) {
      return res.status(400).send({
         ok: false,
         message: `Ish tugallangan oyni kiritish kerak`
      })
   }

   if (workEndYear === 'hozirgacha') {
      try {
         await req.psql.experiences.create({
            company_name: workPlace,
            position: workType,
            start_year: workStartYear,
            start_month: workStartMonth,
            finish_year: 'hozirgacha',
            finish_month: 'hozirgacha',
            is_present: true,
            description: workAbout,
            user_id: req.user.id
         })

         return res.status(200).send({
            ok: true,
            message: `Ish joyi qo'shildi`
         })
      } catch (e) {
         console.log(e + '')
      }

   }

   try {
      await req.psql.experiences.create({
         company_name: workPlace,
         position: workType,
         start_year: workStartYear,
         start_month: workStartMonth,
         finish_year: workEndYear,
         finish_month: workEndMonth,
         is_present: false,
         description: workAbout,
         user_id: req.user.id
      })

      return res.status(200).send({
         ok: true,
         message: `Ish joyi qo'shildi`
      })
   } catch (e) {
      console.log(e + '')
   }

}