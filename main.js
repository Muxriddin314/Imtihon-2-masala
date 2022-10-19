let salaries = {
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800
}

function sumSalaries(salaries){
    let sum = 0
    for (const i in salaries){
    const element = salaries[i];

    sum += element;
    }  
    return sum
}

console.log(sumSalaries(salaries));

