"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { generateQuestions } from "./actions";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { LuClipboardCopy, LuShare } from "react-icons/lu";
import { FaRegCommentDots, FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import AvatarCircles from "@/components/magicui/avatar-circles";
import Image from "next/image";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [tweets, setTweets] = useState<string[]>([]);

  //function to generate tweets
  const getTweets = async () => {
    try {
      setLoading(true);
      const { data } = await generateQuestions();
      setTweets(data.data.map((item: { questions: string }) => item.questions));
      setLoading(false);
    } catch (error) {
      console.error("Error Generating Applications");
      setLoading(false);
    }
  };

  //function to copy tweets
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Tweet Copied to Clipboard!");
      },
      (err) => {
        toast.error("Could not copy text: ", err);
      }
    );
  };

  const SkeletonLoader = () => (
    <div className="space-y-4 mt-4 w-full">
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} className="w-full h-32 rounded-lg bg-zinc-500" />
      ))}
    </div>
  );

  return (
    <div className="lg:min-h-[80vh] min-h-[50vh] mt-4 flex flex-col justify-center items-center">
      <h1 className="lg:text-6xl text-3xl font-bold text-center tracking-tight">
        Ask{" "}
        <span className="text-pink-500 font-extrabold">Silly Questions</span>{" "}
        that increases your{" "}
        <span className="text-blue-500 font-extrabold">
          Twitter Engagements!
        </span>{" "}
      </h1>
      <p className="text-sm text-center tracking-tight mt-6">
        Generate 100% engagement guaranteed questions to get more engagements.
        Click on generate, copy, tweet and see your Twitter engagements go brrrr
        🚀
      </p>
      <AvatarCircles numPeople={27} avatarUrls={avatarUrls} className="my-3" />
      <p className="text-sm">Used by Pro Question Askers!</p>
      <p className="text-sm">696+ Questions Generated!</p>

      <div
        className={cn(
          "group rounded-lg border mt-4 mb-4 border-black/5 bg-blue-600 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
        onClick={() => getTweets()}
      >
        {loading ? (
          <Button
            disabled={loading}
            className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white hover:text-black hover:duration-300 hover:dark:text-neutral-400"
          >
            <span>✨ Generating</span>
            <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
          </Button>
        ) : (
          <Button className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white hover:text-black hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Generate</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </Button>
        )}
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        tweets.length > 0 && (
          <div className="space-y-4 mt-4 w-full">
            {tweets.slice(0, 5).map((tweet, index) => (
              <div
                key={index}
                className="bg-zinc-200 w-full text-black flex flex-col justify-between items-center px-4 py-4 rounded-xl"
              >
                <div className="row1 w-full flex justify-between items-center">
                  <div className="profile w-full flex gap-2 items-center">
                    <Image
                      src="https://scontent-ccu1-1.cdninstagram.com/v/t51.2885-19/449534156_1506380829965283_2514978991263321417_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ccu1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Eyd30O51p2MQ7kNvgHsHSTV&edm=AJYBtmQBAAAA&ccb=7-5&oh=00_AYAGmZkTpxTKvTiiSOZ8PlAn3I74NrSk9aPjaTq_r6FDsg&oe=66A1BDFE&_nc_sid=691684"
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full "
                    />
                    <div className="name">
                      <h1 className="leading-tight font-bold text-lg hover:underline">
                        Nilaa Laishram
                      </h1>
                      <h1 className="leading-tight text-zinc-700">
                        @nilaacodes
                      </h1>
                    </div>
                  </div>
                  <div
                    onClick={() => copyToClipboard(tweet)}
                    className="copy flex p-1 rounded-lg items-center gap-1 cursor-pointer transition-all duration-200 hover:text-blue-500"
                  >
                    <LuClipboardCopy size={18} />
                    <span>Copy</span>
                  </div>
                </div>
                <div className="tweet w-full mt-2">
                  <p className="text-left ">{tweet}</p>
                  <div className="time mt-1">
                    <p className="text-zinc-700 text-sm">
                      <span className="hover:underline">
                        10:04 PM • July 19, 2024{" "}
                      </span>
                      • 270K Views
                    </p>
                  </div>
                </div>
                <div className="button mt-3 flex justify-between items-center w-full">
                  <div className="flex gap-1 items-center transition-all duration-200 hover:text-blue-500">
                    <FaRegCommentDots size={25} className="cursor-pointer " />{" "}
                    <span className="lg:text-lg text-sm">6.9K</span>
                  </div>
                  <div className="flex gap-1 items-center transition-all duration-200 hover:text-green-700">
                    <FaRetweet size={25} className="cursor-pointer" />{" "}
                    <span className="lg:text-lg text-sm">696</span>
                  </div>
                  <div className="flex gap-1 items-center transition-all duration-200 hover:text-red-600">
                    <GoHeart size={25} className="cursor-pointer" />
                    <span className="lg:text-lg text-sm">69K</span>
                  </div>
                  <div className="flex gap-1 items-center transition-all duration-200 hover:text-blue-500">
                    <IoBookmarkOutline size={25} className="cursor-pointer" />
                    <span className="lg:text-lg text-sm">27k</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
