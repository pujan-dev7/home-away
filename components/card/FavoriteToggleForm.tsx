"use client";

import { usePathname } from "next/navigation";
import { CardSubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import { toggleFavoriteAction } from "@/utils/actions";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
