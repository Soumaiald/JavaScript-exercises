console.log("******************************************** SBA 308: JavaScript Fundamentals ***************************************************")
console.log("************************************* Part 1: Thinking Functionally *******************************************")

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};
  
// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
};
  
// The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
];
//console.log(LearnerSubmissions[0])
function getLearnerData(course, ag, submissions) {
    
    if (ag.course_id !== course.id){
        //console.log("learnerScore is : " + learnersScore + "learnersPointPoss is : " + arrPointsPoss)
        throw "Error : mismatching course_id"
    } else {
        try { 
            let learnersScore = {}
            let arrPointsPoss = {}
            let idList = []
            //console.log(learnersScore)
            //console.log(arrPointsPoss)
            for(let learnerSub of submissions){
                //console.log(learnerSub)
                let learner_id = learnerSub["learner_id"]
                //console.log(learner_id)
                let assignment_index = learnerSub["assignment_id"] - 1
                //console.log(assignment_index)
                if (idList.includes(learner_id) === false) {
                    idList.push(learner_id)
                    learnersScore[learner_id]=[]
                    arrPointsPoss[learner_id]=[]
                }
                //console.log(learnersScore)
                if (ag.assignments[assignment_index]["due_at"] < "2023-12-04"){
                    //console.log("due-at" + ag.assignments[assignment_index]["due_at"])
                    arrPointsPoss[learner_id].push(ag.assignments[assignment_index]["points_possible"])
                    if (learnerSub["submission"]["submitted_at"] > ag.assignments[assignment_index]["due_at"]){  
                        //console.log("submitted_at" + learnerSub["submission"]["submitted_at"]) 
                        learnersScore[learner_id].push(learnerSub["submission"]["score"]-0.1*ag.assignments[assignment_index]["points_possible"])
                        //console.log(learnersScore)
                    } else {
                        //console.log("submitted_at" + learnerSub["submission"]["submitted_at"]) 
                        learnersScore[learner_id].push(learnerSub["submission"]["score"])
                        //console.log(learnersScore)
                    }

                }
            }
            console.log("learnersScore")
            console.log(learnersScore)
            console.log("arrPointPossible")
            console.log(arrPointsPoss)
            let result = []
            function add(accumulator, a) {
                return accumulator + a;
              }
            for (let [key, value] of Object.entries(learnersScore)){
                result.push({"id":key, "avg": value.reduce(add, 0)/arrPointsPoss[key].reduce(add,0)})
            }
            console.log("The average score for each learner is")
            console.log(result)
        
        } catch(err) {
            console.log("There is an Error")
        }
    }

    

}
  
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  

  