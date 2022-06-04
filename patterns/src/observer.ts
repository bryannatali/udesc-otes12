type Observer<T = any> = (data: T) => void

class Observable<T = any> {
  private observers!: Observer<T>[]

  constructor() {
    this.observers = []
  }

  public subscribe(observerFunction: Observer<T>) {
    this.observers.push(observerFunction)
  }

  public unsubscribe(observerFunction: Observer<T>) {
    this.observers = this.observers.filter(observer => observer !== observerFunction)
  }

  public notify(data: T) {
    this.observers.forEach(observer => observer(data))
  }
}

type Player = {
  id: string
  position: { x: number, y: number }
  gameChanged: (data: any) => void
}

const players: Player[] = [
  {
    id: 'player-1',
    position: { x: 1, y: 12 },
    gameChanged: (data) => console.log('Player 1 game status: ', data),
  },
  {
    id: 'player-2',
    position: { x: 5, y: 7 },
    gameChanged: (data) => console.log('Player 2 game status: ', data),
  },
  {
    id: 'player-3',
    position: { x: 9, y: 3 },
    gameChanged: (data) => console.log('Player 3 game status: ', data),
  },
]

const game = new Observable()

players.forEach(player => {
  game.subscribe(player.gameChanged)
})

game.notify('Game is offline 🙁')
setTimeout(() => {
  game.notify('Game is online again 🚀')
}, 3000)