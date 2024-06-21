const express = require("express");
const app = express();
app.use(express.json());

const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
};

app.use(requestLogger)

let users = [
    {id: 1, name: "Alperen", email: "alperen@gmail.com"},
    {id: 2, name: "Ahmet", email: "ahmet@gmail.com"},
    {id: 3, name: "Burak", email: "burak@gmail.com"},
    {id: 4, name: "Hande", email: "hande@gmail.com"},
    {id: 5, name: "Emir", email: "emir@gmail.com"}
];






app.get("/users", (req, res, next) => {
    res.json(users);
});

app.get("/users/:id", (req, res, next) =>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user){
        res.json(user);
    }else{
        const error = new Error("User not found.");
        error.status = 404;
        next(error);
    }
});



const username = "login";
const password = "123";

app.post('/login', (req, res, next) => {
    const inputUsername = req.body.username;
    const inputPassword = req.body.password;

    if (username === inputUsername && password === inputPassword) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        const error = new Error('Invalid username or password');
        error.status = 401;
        next(error);
    }
});


app.post("/users", (req, res, next) => {
    if(req.body.name && req.body.email){
        const newUser = {
            id: users.length +1,
            name: req.body.name,
            email: req.body.email
        };
        users.push(newUser);
        res.status(201);
        res.send(newUser);

    }else {
        const error = new Error("Name and email are required.");
        error.status = 400;
        next(error); 
    }

});





app.put("/users/:id", (req, res, next) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user){
        if (req.body.name && req.body.email) {
            user.name = req.body.name;
            user.email = req.body.email;
            res.json(user);
        } else {
            const error = new Error("Name and email are required.");
            error.status = 400;
            next(error); 
        }
    } else {
        const error = new Error("User not found.");
        error.status = 404;
        next(error); 
    }
});





app.delete("/users/:id", (req, res, next) => {
    const beforeLength = users.length;
    users = users.filter(u => u.id !== parseInt(req.params.id))
    if(users.length+1 === beforeLength){
        res.status(204)
        res.end();
    }else {
        const error = new Error("User not found.");
        error.status = 404;
        next(error);
    }
});




app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error); 
});


const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
};
app.use(errorHandler);




app.listen(3000, () => {
    console.log("Server is accessible on port 3000");
});