import { Button } from "@chakra-ui/react";
import { PositionKind } from "../../types/position";

interface Props {
  value: PositionKind;
  isDisabled: boolean;
  onClick(): void;
}

export const Item = (props: Props) => {
  return (
    <Button
      isDisabled={props.isDisabled}
      variant="outline"
      width={"100px"}
      height={"100px"}
      borderWidth={"3px"}
      onClick={props.onClick}
      _disabled={{
        background: "#edf2f7",
        cursor: "not-allowed",
      }}
      _hover={{
        background: "#edf2f7",
      }}
      _active={{
        background: "#edf2f7",
      }}
    >
      {props.value && props.value === "cross" && "X"}
      {props.value && props.value === "circle" && "O"}
    </Button>
  );
};
