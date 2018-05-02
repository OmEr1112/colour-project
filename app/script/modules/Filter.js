class Filter {
  constructor(){
    this.filterActor();  
  }

  filterActor(){
    const actorBtn = document.getElementById('actor');
    actorBtn.addEventListener('click', (e) => this.allActor(e));

    const actoressBtn = document.getElementById('actoress');
    actoressBtn.addEventListener('click', (e) => this.allActoress(e));

    const singerBtn = document.getElementById('singer');
    singerBtn.addEventListener('click', (e) => this.allSinger(e));

    const allBtn = document.getElementById('all');
    allBtn.addEventListener('click', (e) => this.allPeoples(e));  
  }

  allActor(e){
    e.preventDefault();
    this.allReset();
    const allPeople = document.querySelectorAll('.projects_boxes div');

    for (let i = 0; i < allPeople.length; i++) {
      if (allPeople[i].dataset.prof !== 'actor') {
        allPeople[i].style.display = 'none';
      } 
    }
  }

  allActoress(e){
    e.preventDefault();
    this.allReset();
    const allPeople = document.querySelectorAll('.projects_boxes div');

    for (let i = 0; i < allPeople.length; i++) {
      if (allPeople[i].dataset.prof !== 'actoress') {
        allPeople[i].style.display = 'none';
      } 
    }
  }

  allSinger(e){
    e.preventDefault();
    this.allReset();
    const allPeople = document.querySelectorAll('.projects_boxes div');

    for (let i = 0; i < allPeople.length; i++) {
      if (allPeople[i].dataset.prof !== 'singer') {
        allPeople[i].style.display = 'none';
      } 
    }
  }

  allPeoples(e){
    e.preventDefault();
    const allPeople = document.querySelectorAll('.projects_boxes div');

    for (let i = 0; i < allPeople.length; i++) {
      allPeople[i].style.display = 'initial';
    }
  }

  allReset(){
    const allPeople = document.querySelectorAll('.projects_boxes div');

    for (let i = 0; i < allPeople.length; i++) {
      allPeople[i].style.display = 'initial';
    }
  }

  // test(){
  //   console.log(this.allActor());
  // }

}

export default Filter;