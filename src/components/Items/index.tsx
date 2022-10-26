import { Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/app-hooks";
import { setMove, setValue } from "../../store/position";

import { Item } from "./item";

export const Items = () => {
  const dispatch = useDispatch();

  const { positions } = useAppSelector((state) => state.position);

  const handleOnClick = (position: string) => {
    dispatch(setMove(position));
    dispatch(setValue());
  };

  return (
    <>
      {[...Array(3)].map((_, i) => (
        <Flex key={i} flexDirection={"column"}>
          {[...Array(3)].map((_, j) => {
            const key = `${i},${j}`;
            return (
              <Flex key={j} margin={"5px"}>
                <Item
                  value={positions[key]}
                  onClick={() => handleOnClick(key)}
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
