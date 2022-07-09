//This is ten names and ages respectively
let user_names = [`Gabriel`, `Alex`, `Satinder`, `Tyler`, `Nadine`, `Zach`, `Colleen`, `Josh`, `James`, `Hani`];
let user_ages = [26, 35, 30, 30, 40, 29, 30, 25, 30, 17];

//This while loop is searching for ages that are at least 18 and then printing out the names of who are above 18
let counter = 0;
while(counter < user_ages.length) {
    if(user_ages[counter] >= 18){
         console.log(`At least 18: ${user_names[counter]}`);
    }
   
    counter++;
}

//This for loop is searching for ages that are under 18 and then printing out the names of who are under 18

for(let counter = 0; counter < user_ages.length; counter++) {
    if(user_ages[counter] < 18){
        console.log(`Under 18: ${user_names[counter]}`);
    }
}