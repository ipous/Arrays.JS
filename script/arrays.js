console.log('Hello World')

let numbers = [2,4,6,8,10,12]


for (let i = 0; i < numbers.length; i++)

let people = ['sally', 'susan','sam', 'bob']

for (let i = 0; i < people.length; i++)

console.log('current position:',i, 'current number:',numbers[i])
if(people[i] === 'sam') {
    console.log('we found', people[i]);
    document.querySelector('h1').textContent = 'we found' + people[i];
} else {console.log(people[i], 'is not Sam');
alert(people[i] + 'is not sam')}