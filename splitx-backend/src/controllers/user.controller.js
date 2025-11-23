import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    console.log("REQ BODY:", req.body);

  const { fullName, email, password, username, phoneNumber } = req.body;


  // 1. Validate required fields
  if ([fullName, email, password, username, phoneNumber].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  // 2. Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }
  // 5. Create user
  const user = await User.create({
    fullName,
    email,
    username: username.toLowerCase(),
    password,
    phoneNumber,
  });

  // 6. Return safe user object
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", createdUser));
});

export { registerUser };
