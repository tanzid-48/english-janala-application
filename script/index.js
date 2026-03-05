const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
        .then(res => res.json())
        .then(json => {
            // console.log(json.data)
            displayLessons(json.data);
        });
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`

    fetch(url)
        .then(res => res.json())
        .then(json => {
            displayLevelWord(json.data);

        })

};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    for (let word of words) {
        const wordCard = document.createElement("div");
        wordCard.innerHTML = `

        <div class="bg-white rounded-xl shadow-sm text-center py-10  px-5 space-y-3">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class=" font-bangla  font-medium text-2xl">${word.meaning} / ${word.pronunciation}</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>


        </div>
        
        `;

        wordContainer.append(wordCard);
    }


}



const displayLessons = (lessons) => {
    // 1.get the container

    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";

    lessons.forEach(lesson => {
        // console.log(lesson);
        // 2.create element
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `

     <button onclick = "loadLevelWord(${lesson.level_no})" class=" btn btn-outline btn-primary">
     <i class="fa-solid fa-book-open"></i>
     </i> Lesson - ${lesson.level_no}</button>
  `;
        levelContainer.append(btnDiv)

    });
}

loadLessons()

