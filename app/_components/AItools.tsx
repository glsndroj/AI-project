"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGenerator from "./_features/ImageGenerator";
import ImageAnalysis from "./_features/ImageAnalysis";
import ImageIngredients from "./_features/ImageIngredients";

export default function AiTools() {
  return (
    <div>
      <Tabs defaultValue="Analysis">
        <TabsList>
          <TabsTrigger value="Analysis">Image analysis</TabsTrigger>
          <TabsTrigger value="Ingredients">Ingredients recognition</TabsTrigger>
          <TabsTrigger value="Generator">Image creator</TabsTrigger>
        </TabsList>

        <TabsContent value="Analysis">
          <ImageAnalysis />
        </TabsContent>

        <TabsContent value="Ingredients">
          <ImageIngredients />
        </TabsContent>

        <TabsContent value="Generator">
          <ImageGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
