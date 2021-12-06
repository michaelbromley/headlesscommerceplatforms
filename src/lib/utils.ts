export function camelToSentence(input: string): string {
    const result = input.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}
