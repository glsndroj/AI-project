
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
import IngredientsSvg from "@/SVG/Ingredients";


export default function ImageIngredients() {
  return (
    <Card className="h-fit w-[580px]">
      <CardHeader>
        <CardTitle>
          <IngredientsSvg/>
        </CardTitle>
        <CardDescription>
        Describe the food, and AI will detect the ingredients.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          
          <Input type="text" placeholder="Орц тодорхойлох"/>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-gray-500">Generate</Button>
      </CardFooter>
    </Card>
  );
}
