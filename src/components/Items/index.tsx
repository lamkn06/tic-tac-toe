import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/app-hooks";
import { setPosition, setValue } from "../../store/position";
import { selectIsWinner } from "../../store/user";

import { Item } from "./item";

export const Items = () => {
  const dispatch = useDispatch();
  const { positions } = useAppSelector((state) => state.position);
  const { name } = useAppSelector((state) => state.user);
  const isWinner = useSelector(selectIsWinner);

  const handleOnClick = (row: number, col: number) => {
    if (isWinner) {
      return;
    }
    dispatch(setPosition({ row, col }));
    dispatch(setValue());
  };

  return (
    <Flex flexDirection={"column"}>
      {isWinner && (
        <Alert status="success" borderRadius={"20px"} mb={"10px"}>
          <AlertIcon />
          <AlertTitle>{name}</AlertTitle>
          <AlertDescription>You are won this game</AlertDescription>
        </Alert>
      )}
      <Flex>
        {[...Array(3)].map((_, i) => (
          <Flex
            key={i}
            flexDirection={"column"}
            opacity={isWinner ? "0.3" : "1"}
          >
            {[...Array(3)].map((_, j) => {
              const key = `${j},${i}`;
              return (
                <Flex key={j} margin={"5px"}>
                  <Item
                    value={positions[key]}
                    onClick={() => handleOnClick(j, i)}
                    isDisabled={!!positions[key] || isWinner}
                  />
                </Flex>
              );
            })}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
