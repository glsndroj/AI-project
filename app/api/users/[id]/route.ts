import { User } from "@/models/user.Schema";
import connectDB from "@/utils/mongodb";

export async function DELETE(request: Request, context: any) {
  await connectDB();
  const id = context.params.id;
  const deletedUser = await User.findByIdAndDelete(id);

  return Response.json({ message: "User deleted", deletedUser });
}

export async function PATCH(request: Request, context: any) {
  await connectDB();
  const id = context.params.id;
  const body = await request.json();
  const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });

  console.log(updatedUser);

  return Response.json({ message: "User updated", updatedUser });
}
