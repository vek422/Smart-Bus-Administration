import AddUserForm from "@/Forms/AddUserForm";
import Nav from "@/components/Nav";
import { Separator } from "@/components/ui/separator";

export default function AddUser() {
  return (
    <div className="w-screen h-screen">
      <Nav />
      <div className="p-2">
        <div className="px-10">
          <h1 className="text-3xl font-semibold">Add New User</h1>
          <p className="text-md text-muted-foreground">
            Fill The Form to add new User
          </p>
          <Separator className="mt-5" />
          <AddUserForm />
        </div>
      </div>
    </div>
  );
}
