export function hey(message: string): string {
    return decodeMessage(message);
}


export function decodeMessage(message: string)  : string  {

    message = message.trim();
    const silence = /^[\s]*$/;
    const shout = /^[A-Z]+$/;
    const question = /\?$/;
    if (silence.test(message)){
        return 'Fine. Be that way!';
    }
    if (question.test(message)){
        if (shout.test(removeChars(message))){
            return 'Calm down, I know what I\'m doing!';
        } else {
            return 'Sure.';
        }
    }
    if (shout.test(removeChars(message))){
        return 'Whoa, chill out!';
    }
    return 'Whatever.';
}

export function removeChars(message: string) : string {
    return message.replace(/[^a-zA-Z]/g, '');;
}