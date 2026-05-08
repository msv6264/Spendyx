import User from "../models/user.model.js";
import checkEmail from "../utils/checkEmail.js";
import { hashPass, comparePass } from "../utils/hashPassword.js";
import { generateToken } from "../utils/generateToken.js";

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found, please signup !" });
    }

    const isMatch = await comparePass(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function signUpUser(req, res) {
  try {
    const { email, password } = req.body;
    const hashedPassword = await hashPass(password);

    const userExisted = await User.findOne({email});
    if (userExisted){
        return res.status(403).json({message: "User already exists with your mail !! Please login to continue"})
    }

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }
    if (!checkEmail(email)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    await newUser.save();
    const token = generateToken(newUser._id);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
