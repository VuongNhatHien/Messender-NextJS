import { redirect } from "next/navigation";
import { Button } from "./button";
import { logout } from "@/actions/actions";

export default function LogoutButton() {
    return (
        <div>
            <Button
                variant="ghost"
                className={"text-base font-semibold"}
                onClick={() => {
                    logout();
                }}
            >
                Logout
            </Button>
        </div>
    );
}
