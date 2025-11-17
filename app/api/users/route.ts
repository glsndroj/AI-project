import { User } from "@/models/user.Schema";
import connectDB from "@/utils/mongodb";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json({ users });
}

export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();
  const { name } = body;

  const existingUser = await User.findOne({ name });
  if (existingUser) {
    return Response.json({ message: "User already created" }, { status: 400 });
  }
  const newUser = await User.create(body);

  return Response.json({ message: "User created", user: newUser });
}
