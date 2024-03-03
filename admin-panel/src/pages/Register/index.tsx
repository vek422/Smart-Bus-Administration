import { Button } from "@/components/ui/button";
import ToggleThemeButton from "@/components/ui/ToggleThemeButton";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "@/Forms/RegisterForm";
export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="border flex w-max shadow-lg h-min p-8 rounded-lg flex-col gap-5">
        <div className="flex item-center justify-between">
          <div className="flex-col gap-4">
            <h3 className="font-semibold text-2xl">Create Account </h3>
            <p className="font-sm font-medium text-muted-foreground">
              Enter your details below to create account
            </p>
          </div>
          <div className="w-1/12">
            <ToggleThemeButton />
          </div>
        </div>
        <RegisterForm />
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">Alreay Have Account?</p>
          <Button
            variant={"link"}
            className="p-2"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
