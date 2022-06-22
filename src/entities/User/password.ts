import * as bcrypt from 'bcrypt'

export class UserPassword {
  static async encryptPassword (password: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    return hashPassword
  }

  static async comparePassword (hashPassword, password: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword)
  }
}
