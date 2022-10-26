import { Alert, AlertIcon, AlertTitle, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/app-hooks";
import { setMove, setValue } from "../../store/position";
import { selectIsWinner } from "../../store/user";

import { Item } from "./item";

export const Items = () => {
  const dispatch = useDispatch();
  const { positions } = useAppSelector((state) => state.position);
  const isWinner = useSelector(selectIsWinner);

  const handleOnClick = (row: number, col: number) => {
    dispatch(setMove({ row, col }));
    dispatch(setValue());
  };

  return (
    <>
      {isWinner && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>You are won</AlertTitle>
        </Alert>
      )}
      {[...Array(3)].map((_, i) => (
        <Flex key={i} flexDirection={"column"}>
          {[...Array(3)].map((_, j) => {
            const key = `${j},${i}`;
            return (
              <Flex key={j} margin={"5px"}>
                <Item
                  value={positions[key]}
                  onClick={() => handleOnClick(j, i)}
                  isDisabled={!!positions[key]}
                />
              </Flex>
            );
          })}
        </Flex>
      ))}
    </>
  );
};
