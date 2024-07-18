"use client";

import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { generateQuestions } from "./actions";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

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
        <Skeleton key={index} className="w-full h-12 rounded-lg bg-zinc-500"/>
      ))}
    </div>
  );

  return (
    <div className="min-h-[60vh] mt-4 flex flex-col justify-center items-center">
      <h1 className="lg:text-6xl text-3xl font-bold text-center tracking-tight">
        Ask Silly Questions that increases your Twitter Engagements!
      </h1>
      <p className="text-sm text-center tracking-tight mt-6">
        Generate 100% engagement guaranteed questions to get more engagements.
        Click on generate, copy, tweet and see your Twitter engagements go brrrr
        🚀
      </p>
      <div
        className={cn(
          "group rounded-lg border mt-4 border-black/5 bg-blue-600 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
        onClick={() => getTweets()}
      >
        {loading ? (
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white hover:text-black hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Generating</span>
            <ReloadIcon className="ml-2 mt-1 h-4 w-4 animate-spin" />
          </AnimatedShinyText>
        ) : (
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white hover:text-black hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Generate</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        )}
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        tweets.length > 0 && (
          <div className="space-y-4 mt-4 w-full">
            {tweets.slice(0, 5).map((tweet, index) => (
              <div key={index} className="bg-white w-full text-black flex justify-between items-center px-3 py-4 rounded-lg">
                <p className="w-[75%]">{tweet}</p>
                <Button onClick={() => copyToClipboard(tweet)}>Copy</Button>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}