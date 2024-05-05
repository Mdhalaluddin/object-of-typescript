{
// keyof 

type vehicle = {
    car:string ;
    bike: string ;
    TV: string;
};
type Owner = "car" | "bike" | "TV"; //manually

type my = keyof vehicle;

// extends of keyof এর X মান এর Y মধ্যে থাকতে হবে।
const getPaperTypeValue =<X, Y extends keyof X> (obj: X, key: Y) =>{
    return obj[key];
}
const user = {
    name: 'Mr. Halal',
    age: 25,
    Location: 'Ctg',
};

const car = {
    model:  "Toyata",
    since: 2000
}

const result = getPaperTypeValue(car, 'since');







}