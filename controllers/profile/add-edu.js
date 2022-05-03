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

   const { eduPlace, eduType, eduStartYear, eduStartMonth, eduEndYear, eduEndMonth, eduAbout } = req.body

   if (eduPlace.trim().length < 4) {
      return res.status(400).send({
         ok: false,
         message: `O'qish joyining nomi kamida 4 ta belgidan iborat bo'lishi kerak`
      })
   }

   if (eduType.trim().length < 4) {
      return res.status(400).send({
         ok: false,
         message: `Qaysi yo'nalishdagi o'qiganlik haqidagi maydonga kamida 4 ta belgi kiritilishi kerak`
      })
   }

   if (!years.includes(+eduStartYear)) {
      return res.status(400).send({
         ok: false,
         message: `O'qish boshlangan yilni kiritish kerak`
      })
   }

   if (!months.includes(eduStartMonth)) {
      return res.status(400).send({
         ok: false,
         message: `O'qish boshlangan oyni kiritish kerak`
      })
   }

   if (!years.includes(+eduEndYear) && eduEndYear !== 'hozirgacha') {
      return res.status(400).send({
         ok: false,
         message: `O'qish tugallangan yilni kiritish kerak`
      })
   }

   if (years.includes(+eduEndYear) && !months.includes(eduEndMonth)) {
      return res.status(400).send({
         ok: false,
         message: `O'qish tugallangan oyni kiritish kerak`
      })
   }

   if (eduEndYear === 'hozirgacha') {
      try {
         await req.psql.educations.create({
            edu_name: eduPlace,
            edu_fac: eduType,
            start_year: eduStartYear,
            start_month: eduStartMonth,
            finish_year: 'hozirgacha',
            finish_month: 'hozirgacha',
            is_present: true,
            description: eduAbout,
            user_id: req.user.id
         })

         return res.status(200).send({
            ok: true,
            message: `O'qish joyi qo'shildi`
         })
      } catch (e) {
         console.log(e + '')
      }

   }

   try {
      await req.psql.educations.create({
         edu_name: eduPlace,
         edu_fac: eduType,
         start_year: eduStartYear,
         start_month: eduStartMonth,
         finish_year: eduEndYear,
         finish_month: eduEndMonth,
         is_present: false,
         description: eduAbout,
         user_id: req.user.id
      })

      return res.status(200).send({
         ok: true,
         message: `O'qish joyi qo'shildi`
      })
   } catch (e) {
      console.log(e + '')
   }

}