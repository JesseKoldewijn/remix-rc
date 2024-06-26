"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5znTipfONdc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { ListerData } from "~/data/lister-data";

import { Slider } from "./ui/slider";

export function ItemLister({ products }: { products: ListerData[] }) {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: { current: 0, min: 0, max: 1000 },
  } as {
    category: string[];
    price: { current: number; min: number; max: number };
  });

  const filteredProducts = () => {
    return products.filter((product) => {
      if (
        selectedFilters.category.length > 0 &&
        !selectedFilters.category.some((x) => {
          return product.category.includes(x as ListerData["category"][number]);
        })
      ) {
        return false;
      }
      if (
        product.price < selectedFilters.price.min ||
        product.price > selectedFilters.price.max
      ) {
        return false;
      }

      return true;
    });
  };

  const handleFilterChange = (type: keyof ListerData, value: any) => {
    if (type === "category") {
      setSelectedFilters({
        ...selectedFilters,
        category: selectedFilters.category.includes(value)
          ? selectedFilters.category.filter((item) => item !== value)
          : [...selectedFilters.category, value],
      });
    } else if (type === "price") {
      setSelectedFilters({
        ...selectedFilters,
        price: value,
      });
    }
  };

  return (
    <div className="grid gap-8 p-4 md:grid-cols-[280px_1fr] md:p-8">
      <div className="flex flex-col gap-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="category">
            <AccordionTrigger className="text-base font-medium">
              Category
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    onCheckedChange={() =>
                      handleFilterChange("category", "Clothing")
                    }
                  />
                  Clothing
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    onCheckedChange={() =>
                      handleFilterChange("category", "Accessories")
                    }
                  />
                  Accessories
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    onCheckedChange={() =>
                      handleFilterChange("category", "Home")
                    }
                  />
                  Home
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium">
              Price
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <Slider
                    defaultValue={[selectedFilters.price.current]}
                    min={selectedFilters.price.min}
                    max={selectedFilters.price.max}
                    onClick={(e) => {
                      const t = e.target as HTMLInputElement;

                      handleFilterChange("price", {
                        current: parseInt(t.ariaValueNow || "0"),
                        min: selectedFilters.price.min,
                        max: selectedFilters.price.max,
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts().map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-950"
          >
            <img
              src="/placeholder.svg"
              alt={product.name}
              width={400}
              height={400}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">${product.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
