export function twoFer(name?: string ): string {
    name = name ?? 'you'
    const message = `One for ${name}, one for me.`
    return message
}