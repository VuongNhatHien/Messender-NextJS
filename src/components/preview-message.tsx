"use client";
import Searchbar from "@/components/search";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { previewMessage } from "@/mock/mock";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function PreviewMessage() {
    const params = useParams<{ slug: string }>();
    return (
        <div className="card col-span-1">
            <div
                className={"header flex items-center justify-between px-4 py-3"}
            >
                <p className={"text-2xl font-bold"}>Chats</p>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={"rounded-full"}
                            size={"icon"}
                        >
                            <p className={"text-2xl"}>+</p>
                        </Button>
                    </DialogTrigger>

                    <DialogContent className={"h-[30rem] gap-0"}>
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
                        <div className="h-full space-y-1 overflow-auto px-1 pt-1">
                            {previewMessage.map((message) => (
                                <button
                                    key={message.id}
                                    className="card-link py-1 pl-2"
                                >
                                    <Avatar>
                                        <AvatarImage src={message.avatar} />
                                        {/* <AvatarFallback>Null</AvatarFallback> */}
                                    </Avatar>
                                    <div className="ml-4">
                                        <p className="line-clamp-1 flex font-semibold">
                                            {message.name}
                                        </p>
                                        <p className="line-clamp-1 flex text-muted-foreground">
                                            {message.email}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className={"px-3"}>
                <Searchbar />
            </div>

            <Separator className={"mt-4"} />
            <div className="h-full space-y-1 overflow-auto px-1 py-1">
                {previewMessage.map((message) => (
                    <Link
                        key={message.id}
                        className={`card-link py-1 pl-2 ${params.slug === `${message.id}` ? "bg-accent border-2 shadow" : "text-accent-foreground"}`}
                        href={`/chats/${message.id}`}
                    >
                        <Avatar>
                            <AvatarImage src={message.avatar} />
                            {/* <AvatarFallback>Null</AvatarFallback> */}
                        </Avatar>

                        <div className="ml-4">
                            <p className="line-clamp-1 font-semibold">
                                {message.name}
                            </p>
                            <p className="line-clamp-1 text-muted-foreground">
                                {message.message}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
