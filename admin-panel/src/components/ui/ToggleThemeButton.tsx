import { useTheme } from "../theme-provider";
import { Button } from "./button";
import { Sun, Moon } from "lucide-react";
const ToggleThemeButton = ({ rounded }) => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={rounded && "rounded-full"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ToggleThemeButton;
