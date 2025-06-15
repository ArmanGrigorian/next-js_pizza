import { Button } from "@/components";
import { User } from "lucide-react";

const LoginButton: React.FC = () => {
  return (
    <Button variant="outline" className="flex items-center gap-1">
      <User size={16} />
      <span>Login</span>
    </Button>
  );
};

export default LoginButton;
