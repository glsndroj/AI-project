"use client";

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
import ImageAnalysisSvg from "@/SVG/ImageAnalysis";
import { errorMonitor } from "events";
import { useState } from "react";

export default function ImageAnalysis() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [detectedObject, setDetectedobject] = useState<any[]>([]);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setDetectedobject([]);
    }
  };

  const analyzeImage = async () => {
    if (!uploadedImage) return;
    setAnalyzing(true);
    setDetectedobject([]);
    try {
      const formData = new FormData()
      formData.append("image", uploadedImage);

      const response = await fetch("api/gemini", {
        method: "POST",
        body: formData,
      })
      if(response.ok) {
        const data = await response.json();
        setDetectedobject(data.objects || []
        )
      }else {
        console.error("Failed to analyze image")
      }
    } catch (error) {
      console.error("Error: ", error)
    }finally{
      setAnalyzing(false)
    }
  };

  return (
    <Card className="h-fit w-[580px]">
      <CardHeader>
        <CardTitle>
          <ImageAnalysisSvg />
        </CardTitle>
        <CardDescription>
          Upload a food photo, and AI will detect the ingredients.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Input type="file" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-gray-500">Generate</Button>
      </CardFooter>
    </Card>
  );
}
