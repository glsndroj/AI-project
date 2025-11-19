"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ImageGeneratorSvg from "@/SVG/ImageGenerator";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrl("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else console.error("Failed to generate image!");
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Card className="h-fit w-[580px]">
        <CardHeader>
          <CardTitle>
            <ImageGeneratorSvg />
          </CardTitle>
          <CardDescription>
            What food image do you want? Describe it briefly.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt..."
              onKeyDown={(e) => e.key === "Enter" && generateImage()}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            className="bg-gray-500"
            onClick={generateImage}
            disabled={loading || !prompt.trim()}
          >
            {loading ? "Generating" : "Generate"}
          </Button>
        </CardFooter>
        {imageUrl && (
          <div className="mt-8">
            <img
              src={imageUrl}
              alt="Generated"
              className="w-full px-5 rounded-md"
            />
          </div>
        )}
      </Card>
    </div>
  );
}
