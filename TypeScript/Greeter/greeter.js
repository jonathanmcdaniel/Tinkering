function greeter(person, job) {
    return "Hello, " + person.firstname + " " + person.lastname + " " + person.age + ".<br/>You are a " + job.position + " and have been doing that for " + job.years + " years.";
}
var user = { firstname: "Jane", lastname: "User", age: 43 };
var job = { position: "Developer", years: 7 };
document.body.innerHTML = greeter(user, job);
