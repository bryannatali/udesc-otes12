class Logger {
  private static instance?: Logger

  private constructor() {
    if (Logger.instance) {
      throw new Error("You can only create one instance of this object!")
    }

    Logger.instance = this
  }

  public static getInstance() {
    if (!this.instance) {
      return new Logger()
    }

    return this.instance
  }

  public log(logText: string) {
    const date = new Date()
    const dateLog = `${date.toLocaleDateString('pt-BR')} ${date.toLocaleTimeString('pt-BR')}`

    console.log(`[${dateLog}]: ${logText}`)
  }
}

const logger = Logger.getInstance()
// const logger2 = Logger.getInstance()

logger.log('User has been disconnected!')
setTimeout(() => {
  logger.log('User has been connected again!')
}, 3000)