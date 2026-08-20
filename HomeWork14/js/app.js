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

const student = new Student("Alex", "kusok@gmail.com");
console.log(student.getName());
console.log(student.getEmail());
student.addHomeworkResult("HTML Basics", true);
console.log(student.getHomeworkResults());

