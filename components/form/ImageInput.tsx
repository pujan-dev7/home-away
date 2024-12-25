import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function ImageInput() {
  const name = "image";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        className="max-w-xs"
        required
        accept="image/*"
      />
    </div>
  );
}

export default ImageInput;
