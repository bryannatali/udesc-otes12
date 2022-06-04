type Car = {
  model: string
  brandName: string
  year: number
}

type CarProxy = {
  test: () => void
}

const car: Car = {
  model: 'Tiida',
  brandName: 'Nissan',
  year: 2009
}

const carProxy = new Proxy(car, {
  get: (target: typeof car, prop: keyof typeof car) => {
    console.log(`The value of ${prop} is ${target[prop]}`);

    return target[prop]
  },

  set: (target: typeof car, prop: keyof typeof car, value: never) => {
    target[prop] = value

    return true
  }
})

console.log(carProxy)

carProxy.model = 'Golf GTI'
carProxy.brandName = 'Volksvagen'
carProxy.year = 2018

console.log(carProxy)