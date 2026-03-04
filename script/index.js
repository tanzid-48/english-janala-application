const loadLessons = ()=> {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then(res => res.json())
    .then(json => {
        // console.log(json.data)
        displayLessons(json.data);
    });

    const displayLessons = (lessons)=>{
        // 1.get the container

 const levelContainer = document.getElementById('level-container');
 levelContainer.innerHTML = "";
 
 lessons.forEach(lesson => {
    // console.log(lesson);
    // 2.create element
  const btnDiv = document.createElement("div")
  btnDiv.innerHTML = `

     <button class=" btn btn-outline btn-primary">
     <i class="fa-solid fa-book-open"></i>
     </i> Lesson - ${lesson.level_no}</button>
  `;
  levelContainer.append(btnDiv)
    
 });
  

  

    }






}
loadLessons()