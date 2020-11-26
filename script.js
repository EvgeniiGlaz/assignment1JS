//Task 1
var totalSum = 0;

function sum(num) {
	totalSum += num;
	return sum;
}

sum(5)(3)

console.log(totalSum)

//Task 2
let obj1 = {
	n: null,
	num: 123,
	str: 'privet',
	innerObj: {
		objNum: 123
	},
	innerArr: ['a', 'b'],
	sayHi() {
		console.log('hello')
	}
}

function newObject(obj) {
	b = {}
	for (let key in obj) {
		if (obj[key] === null) {
			b[key] = null;
			continue;
		}
		if (typeof obj[key] == 'object') {
			try {
				b[key] = [...obj[key]]
			} catch (err) {
				b[key] = { ...obj[key] }
			}
		} else {
			b[key] = obj[key]
		}
	}
	//b.num = 321; //ПРОВЕРКИ ДЛЯ РАЗНЫХ ТИПОВ ДАННЫХ
	//b.str = 'tevirp';
	//b.innerObj.objNum = 4321;
	//b.innerArr[0] = 'f';
	//b.innerArr[1] = 'z';
	//b.sayHi = function (a) {
	//console.log(a)
	//}
	return b;
}
console.log('Old object: ', obj1)
console.log('New object: ', newObject(obj1))

