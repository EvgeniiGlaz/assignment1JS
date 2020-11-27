//Task 1
function sum(num) {
	let totalSum = 0;
	totalSum += num;

	function secondSum(num1) {
		totalSum += num1;
		return totalSum;
	}

	return secondSum;
}

console.log(sum(2)(3))

//Task 2
const actionSample = {
	type: 'DISPATCH_STATUS',
	payload: {
		id: 463901,
		status: 'pending',
		startTime: 1576115477,
		startAt: 1576115477,
		counters: {
			total: {
				sent: 2328,
				delivered: 2034,
				read: 0,
				undelivered: 0,
				timeout: 0,
				progress: 294,
				other: 0,
				total: 2328,
				amount: 4781.7,
			},
			sms: {
				sent: 2328,
				delivered: 2034,
				read: 0,
				undelivered: 0,
				timeout: 0,
				progress: 294,
				other: 0,
				total: 2328,
				amount: 4781.7,
			},
		},
	},
};

function newObject(obj) {
	let newObj = {}
	for (let key in obj) {
		if (obj[key] === null) {
			newObj[key] = null;
			continue;
		}

		if (typeof obj[key] == 'object') {
			if (Array.isArray(obj[key])) {
				newObj[key] = [...obj[key]]
			} else {
				newObj[key] = { ...obj[key] }
			}

			for (let innerKey in obj[key]) {
				if (typeof obj[key][innerKey] == 'object') {
					newObj[key][innerKey] = newObject(obj[key][innerKey]);
				}
			}
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj;
}

let newObj = newObject(actionSample);
// newObj.type = 'test_value'; //Тест примитива
// newObj.payload.status = 'testing'; //Тест первой вложенности
// newObj.payload.counters.sms.sent = 'Object link is finally broken!'; //Тест третьей вложенности


console.log('Old object: ', actionSample)
console.log('New object: ', newObj)


