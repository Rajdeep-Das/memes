"use client";
/**
 * @see https://v0.dev/t/q2SbxgUldPn
 */
import {
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import ShareButton from "./ui/sharebutton";

export function MemesView({ imgURL }: { imgURL: string }) {
  return (
    <Card className="w-full max-w-xl">
      <CardContent className="p-4 flex items-center justify-center">
        <Image
          alt="Meme"
          className="rounded-lg"
          height="200"
          src={imgURL}
          width="400"
          sizes="(max-height: 168px)"
        />
      </CardContent>
      {/* <CardFooter className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 mr-2">
          <CardTitle className="text-sm">The struggle is real</CardTitle>
          <CardDescription className="text-xs">
            Monday mornings be like
          </CardDescription>
        </div>
      */}

      <CardFooter className="flex justify-center hidden md:flex">
        <ShareButton
          title="Dev memes"
          url={imgURL}
          text="Check out this meme"
        />
      </CardFooter>
    </Card>
  );
}
