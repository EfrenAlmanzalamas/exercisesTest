export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}
export class BankAccount {
  private _isOpen: boolean
  private _balance: number
  constructor() {
    this._isOpen = false
    this._balance = 0
  }
  public open(): void {
    if (this._isOpen) throw new ValueError()
    this._isOpen = true
  }
  public close(): void {
    if (!this._isOpen) throw new ValueError()
    this._isOpen = false
    this._balance = 0
  }
  public deposit(amount: number): void {
    if (!this._isOpen || amount < 0) throw new ValueError()
    this._balance += amount
  }
  public withdraw(amount: number): void {
    if (!this._isOpen || amount < 0 || amount > this._balance)
      throw new ValueError()
    this._balance -= amount
  }
  public get balance(): number {
    if (!this._isOpen) throw new ValueError()
    return this._balance
  }
}