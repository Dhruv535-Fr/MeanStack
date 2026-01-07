const express = require('express');
const mongoose = require('mongoose');
const fs = require("fs");

const app = express();
const PORT = 8000;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Node')
.then(() => console.log("MongoDB is Connected!"))
.catch((err) => console.log("Error Occurred:", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
}, {
    timestamps: true
});

// Model
const User = mongoose.model('user', userSchema);

// Middleware - to identify post request data and convert it into js object
app.use(express.urlencoded({ extended: false }));

// Custom MIDDLEWARE - logging
app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()}: ${req.method} Path: ${req.path}\n`, (err, data) => {
        next();
    });
});

// (SSR) --> sending HTML
app.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        const html = `
            <ul>
                ${users.map((user) => `<li>${user.firstName} ${user.lastName}</li>`).join("")}
            </ul>
        `;
        return res.send(html);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// RestAPI -> Sending json format
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// Routes for specific user by ID
app.route("/api/users/:id")

.get(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ "err": "User Not Found" });
        }
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})

.patch(async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                jobTitle: body.jobTitle,
                gender: body.gender
            },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ "Status": "Error", "message": "User not found" });
        }

        return res.json({ "Status": "Success", "user": user });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})

.delete(async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).json({ "Status": "Error", "message": "User not found" });
        }
        
        return res.json({ "Status": "Success", "message": "User deleted" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// Create new user
app.post("/api/users", async (req, res) => {
    try {
        const body = req.body;
        
        if (!body || !body.firstname || !body.lastname || !body.email || !body.gender || !body.jobtitle) {
            return res.status(400).json({ "Bad Request": "Required all fields" });
        }

        const newUser = await User.create({
            firstName: body.firstname,
            lastName: body.lastname,
            email: body.email,
            jobTitle: body.jobtitle,
            gender: body.gender
        });

        return res.status(201).json({ "Status": "Success", "id": newUser._id, "user": newUser });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server has Started at Port: ${PORT}!`));
