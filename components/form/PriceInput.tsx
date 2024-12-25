import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Prisma } from "@prisma/client";

type PriceInputProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: PriceInputProps) {
  // const name = "price";
  const name = Prisma.PropertyScalarFieldEnum.price;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        type="number"
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
