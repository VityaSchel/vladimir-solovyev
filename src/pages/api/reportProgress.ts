import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'
import { ru as yupRuLocale } from 'yup-locales'

Yup.setLocale(yupRuLocale)

const RequestSchema = Yup.object({
  correct: Yup.number().min(0).integer().required(),
  questions: Yup.number().min(1).integer().required()
})

type Response = { ok: true } | { ok: false, error: 'INVALID_DATA' }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const isValid = await RequestSchema.isValid(req.body)
  if(!isValid) {
    res.status(400).json({ ok: false, error: 'INVALID_DATA' })
    return
  }

  const body = req.body as Yup.InferType<typeof RequestSchema>
  if(body.correct > body.questions) {
    res.status(400).json({ ok: false, error: 'INVALID_DATA' })
    return
  }
  res.status(200).json({ ok: true })
}
