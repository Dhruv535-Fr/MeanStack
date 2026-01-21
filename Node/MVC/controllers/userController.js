const User = require('../models/user');
// Get all users (JSON)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ "err": "User Not Found" });
        }
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Update user by ID
exports.updateUserById = async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: body.firstName || body.firstname,
                lastName: body.lastName || body.lastname,
                email: body.email,
                jobTitle: body.jobTitle || body.jobtitle,
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
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ "Status": "Error", "message": "User not found" });
        }
        return res.json({ "Status": "Success", "message": "User deleted" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Create new user
exports.createUser = async (req, res) => {
    try {
        const body = req.body;
        const firstName = body.firstName || body.firstname;
        const lastName = body.lastName || body.lastname;
        const email = body.email;
        const jobTitle = body.jobTitle || body.jobtitle;
        const gender = body.gender;
        if (!firstName || !lastName || !email || !gender || !jobTitle) {
            return res.status(400).json({ "Bad Request": "Required all fields" });
        }
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            jobTitle,
            gender
        });
        return res.status(201).json({ "Status": "Success", "id": newUser._id, "user": newUser });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
