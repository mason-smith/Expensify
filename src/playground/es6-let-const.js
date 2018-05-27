var nameVar = 'Mason';
nameVar = 'Mike'
console.log('nameVar: ', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);

const nameConst = 'Frank';
console.log('nameConst: ', nameConst);

// Block scoping

var fullName = 'Mason Smith';

if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName)
}