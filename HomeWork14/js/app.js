function Student(name, email) {
    this.getName = function() {
        return name;
    };

    this.getEmail = function() {
        return email;
    };

    const homeworkResults = [];

    this.getHomeworkResults = function() {
        return homeworkResults;
    };

    this.addHomeworkResult = function(topic, success) {
     homeworkResults.push({
        topic,
        success
     });
    };
};

function FrontendLab(students, failedLimit){
    const failedHomeworksLimit = failedLimit;

    const studentsList = students.map(function(student) {
        return new Student(student.name, student.email);
    });

    this.printStudentsList = function() {
        studentsList.forEach(function(student) {
            console.log(student.getName(), student.getEmail(), student.getHomeworkResults());
        })
    };

    this.addHomeworkResults = function(homeworkResults) {
        homeworkResults.results.forEach(function(result) {
            const student = studentsList.find(function(student) {
                return student.getEmail() === result.email;
            });

            if(student !== undefined) {
                student.addHomeworkResult(homeworkResults.topic, result.success);
            }    
        })
    };

    this.printStudentsEligibleForTest = function() {
        studentsList.forEach(function(student) {
            const failedHomeworks = student.getHomeworkResults().filter(function(homework) {
                return homework.success === false;
            });
        
        
            if(failedHomeworks.length <= failedHomeworksLimit) {
                console.log(student.getName(), student.getEmail());
            }
        })
    };
};

const frontendLab = new FrontendLab(listOfStudents, 1);
homeworkResults.forEach(function(homework) {
    frontendLab.addHomeworkResults(homework);
})

frontendLab.printStudentsList();
frontendLab.printStudentsEligibleForTest();

