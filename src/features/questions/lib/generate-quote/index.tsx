import { HITLER, SOLOVYEV, QuoteModel } from '@/features/questions/model'
import quotes from './quotes.json'
import _ from 'lodash'

export function generateQuote(): QuoteModel {
  if(Math.random() > 0.5) {
    return { person: HITLER, quote: _.sample(quotes[HITLER]) as string }
  } else {
    return { person: SOLOVYEV, quote: _.sample(quotes[SOLOVYEV]) as string }
  }
}