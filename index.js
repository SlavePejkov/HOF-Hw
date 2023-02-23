function students(){
    $.ajax({
      url: " https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
      method: "GET",
      success: function(response){
        let parsedJson = JSON.parse(response)
        console.log(parsedJson)
        console.log("Resulsts retrieved");

        let passingGrades = parsedJson.filter(studentsAverageGrade)
        console.log("Students with higher average grade than 3 are: ", passingGrades)

        console.log("All female student names with an average grade of 5 are: ")
        parsedJson.filter(femaleStudentsAverageGrade)
        
        console.log("Male students full names who live in Skopje and are over 18 are:")
        parsedJson.filter(maleStudentsInSkopje)

        console.log("The average grades of all female students over the age of 24 are:")
        females(parsedJson)


        console.log("All male students with a name starting with B and average grade over 2 are:")
        parsedJson.forEach((students) => {
        let firstLetter = students.firstName.charAt(0)
        if(firstLetter === "B" && students.gender === "Male" && students.averageGrade > 2){
        console.log(students.firstName)
        }


        });





      },
  
      error: function(error){
        console.error(error)
      }
      
    })
    
}
students()

let studentsAverageGrade = (students) => {return students.averageGrade > 3;}
    

let femaleStudentsAverageGrade = (females) => {
  if(females.gender === "Female" && females.averageGrade === 5){
    console.log(females.firstName)
  };
};


let maleStudentsInSkopje = (maleStudents) => {
  if(maleStudents.age >= 18 && maleStudents.city === "Skopje" && maleStudents.gender === "Male"){
  console.log(maleStudents.firstName, maleStudents.lastName)
  };
};





function femalesAverageGrade(femalesAG){
  if(femalesAG.gender === "Female" && femalesAG.age > 24){
    console.log(femalesAG.averageGrade)
    return;
  }
}


let females = (femal) => {
  femal.map((female) => {
    console.log(female.averageGrade)
  })

}