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
  
function getLearnerData(course, ag, submissions) {
    
    if (ag.course_id !== course.id){
        throw "Error : mismatching course_id"
    } else {
        try {
            let result = []
            let learnersID = []
            let learnersScore = {}
            let arrPointsPoss = {}
            for(let learnerSub in submissions){
                if (ag[learnersScore["learner_id"] - 1]["due_at"] < Date.now()){

                    if (learnerSub["learner_id"] in learnersID) {
                        if (learnersScore["submission"]["submitted_at"] > ag[learnersScore["learner_id"] - 1]["due_at"]){   
                            learnersScore["learner_id"].push(learnersScore["submission"]["score"]-0.1*ag[learnersScore["learner_id"] - 1]["points_possible"])
                            arrPointsPoss["learner_id"].push(ag[learnersScore["learner_id"] - 1]["points_possible"])
                    } else {
                        learnersID.push(learnerSub["learner_id"])
                        learnersScore["learner_id"]=[learnersScore["submission"]["score"]]
                        arrPointsPoss["learner_id"]=[]
                    }
                    if (learnersScore["submission"]["submitted_at"] < ag[learnersScore["learner_id"] - 1]["due_at"]){
                        arrPointsPoss["learner_id"].push(learnersScore["submission"]["score"])
                    } else if (learnersScore["submission"]["submitted_at"] > ag[learnersScore["learner_id"] - 1]["due_at"]){
    
                    }

                }


            }
        }
        catch {
            console.log("Error Mismatch")
        }
            

    }

}
  
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
console.log(result);
  