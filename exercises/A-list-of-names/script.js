function listOfNames(arrayOfPeople) {
  let content = document.querySelector('#content');
  arrayOfPeople.forEach((object) => {
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    h1.innerHTML = object.name;
    h2.innerHTML = object.job;
    content.appendChild(h1);
    content.appendChild(h2);
  });
}

let people = [
  { name: 'Chris', job: 'Teacher' },
  { name: 'Joanna', job: 'Student' },
  { name: 'Boris', job: 'Prime Minister' },
];

listOfNames(people);
