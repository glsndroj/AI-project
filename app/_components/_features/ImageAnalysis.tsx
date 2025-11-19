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


export default function ImageAnalysis() {
  return (
    <Card className="h-fit w-[580px]">
      <CardHeader>
        <CardTitle>
          <ImageAnalysisSvg/>
        </CardTitle>
        <CardDescription>
       Upload a food photo, and AI will detect the ingredients.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          
          <Input type="file"/>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-gray-500">Generate</Button>
      </CardFooter>
    </Card>
  );
}
