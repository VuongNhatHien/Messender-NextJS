import { requests } from "@/request/requests";
import { Button } from "./button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import NotConnectCard from "./not-connect-card";
import Searchbar from "./search";
import { Separator } from "./separator";
import { UserType } from "@/types/schema.type";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Loading from "@/app/loading";

export default function AddUserDialog() {
    const { data: notConnected } = useSWR<UserType[]>(
        `http://localhost:8080/users/not-connected`,
        fetcher,
    );

    if (!notConnected) {
        return <Loading />;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className={"shrink-0 rounded-full"}
                    size={"icon"}
                >
                    <p className={"text-2xl"}>+</p>
                </Button>
            </DialogTrigger>

            <DialogContent
                className={"flex h-[30rem] flex-col justify-start gap-0"}
            >
                <DialogHeader>
                    <DialogTitle>New message</DialogTitle>
                    <DialogDescription>
                        Start a new conversation with someone
                    </DialogDescription>
                </DialogHeader>

                <div className={"pt-3"}>
                    <Searchbar />
                </div>

                <Separator className={"mt-4"} />
                <div className="h-full space-y-1 overflow-auto pe-1 pt-1">
                    {notConnected.map((user) => (
                        <NotConnectCard key={user.id} user={user} />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
