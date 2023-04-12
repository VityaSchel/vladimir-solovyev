export const HITLER = 'hitler'
export const SOLOVYEV = 'solovyev'
export type QuoteModel = { person: typeof HITLER | typeof SOLOVYEV, quote: string }