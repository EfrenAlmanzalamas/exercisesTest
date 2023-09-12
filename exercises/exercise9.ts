export class DnDCharacter {
  public static generateAbilityScore(): number {
    let values:number[] = []
    for (let index = 0; index < 4; index++) {
      const newValue =  Math.floor(Math.random() * 6) + 1
      values = [...values, newValue]
    }   
    
    const [first, second, third] = values.sort((a, b) => b - a)

    const total = first + second + third

    return this.getModifierFor(total)
  }

  public static getModifierFor(abilityValue: number): number {
   
   return  Math.floor(((abilityValue - 10) / 2));    
  }
}