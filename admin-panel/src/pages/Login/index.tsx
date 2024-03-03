import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ToggleThemeButton from "@/components/ui/ToggleThemeButton";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/Forms/LoginForm";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="border flex  sm:w-max xl:w-2/6 h-min p-8 rounded-lg flex-col gap-5 shadow-lg">
        <div className="flex item-center justify-between">
          <div className="flex-col gap-4">
            <h3 className="font-semibold text-2xl">Log In </h3>
            <p className="font-sm font-medium text-muted-foreground">
              Enter your details below to Login
            </p>
          </div>
          <div className="w-1/12">
            <ToggleThemeButton />
          </div>
        </div>
        <LoginForm />
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">Dont Have an Account?</p>
          <Button
            variant={"link"}
            className="p-2"
            onClick={() => navigate("/auth/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
