type Odber = {
    cas: number; //ms
    prikon: number; //watty
}

let data: Array<Odber> = [
    { cas: 560, prikon: 3400 }, //3,4 watt hodin
    { cas: 590, prikon: 3600 },
    { cas: 580, prikon: 3700 }, // data[2].cas
    { cas: 590, prikon: 3600 },
    { cas: 600, prikon: 3500 },
]

//cena 6,50
//kolik to stalo a spotreba(kilowatt hodiny)
const price: number = 6.5
let power: number = (data[0].prikon + data[1].prikon + data[2].prikon + data[3].prikon + data[4].prikon) / 5
let time: number = (data[0].cas + data[1].cas + data[2].cas + data[3].cas + data[4].cas) / 5
//nenapada me jak to udelat kratsi


let kwh: number = (power / 1000) * (time / 3600)
let endprice: number = kwh * price;
console.log(endprice);
console.log(kwh)


