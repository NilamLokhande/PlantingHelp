const User = require("../model/loginmodel.js");


const signup = async (req, res) => {
  const { firstName, lastName, email, password, userType} = req.body;
  const userExists = await User.findOne({ email }); 
  if (userExists) {
    res.status(401).json({ message: "User ALready exists" });
  } else {
    const user = new User({ firstName, lastName, email, password, userType });

    try {
      user.save();
      const currentUser = {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        userType: user.userType,
      };
      res.send(currentUser);
      res.status(201).json({ message: "USER Signed Up" });
    } catch (error) {
      return res.status(401).json({ message: error });
    }
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user && (await user.authenticate(password))) {
      const currentUser = {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        userType: user.userType,
      };
      res.send(currentUser);
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
  }
};

// const getallusers = async (req, res) => {
//   try {
//     const users = await User.find({}).sort({ createdAt: -1 });
//     res.send(users);
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

// const deleteuser = async (req, res) => {
//   const _id = req.body._id;
//   try {
//     await User.findOneAndDelete({ _id: _id });
//     res.send("User Deleted Successfully");
//   } catch (error) {
//     return res.send("Something went wron while deleteing" + error);
//   }
// };

module.exports = { signup, signin};
