import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Input,
  Button,
  ScaleFade,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../components/Items";
import { useAppSelector } from "../hooks/app-hooks";
import { resetPosition } from "../store/position";
import { selectIsWinner, setName } from "../store/user";

const MainPage = () => {
  const dispatch = useDispatch();
  const { name } = useAppSelector((state) => state.user);
  const isWinner = useSelector(selectIsWinner);

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeName = useCallback(
    (event: { target: { value: string } }) => {
      dispatch(setName(event?.target.value));
    },
    [dispatch],
  );

  const handleStartGame = () => {
    if (isWinner) {
      dispatch(resetPosition());
    }

    setIsOpen(true);
  };

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Welcome to{" "}
          <Text as={"span"} color={"orange.400"}>
            tic-tac-toe
          </Text>
        </Heading>
        <Stack spacing={10} direction={"row"}>
          <Input
            placeholder="Enter your name"
            onChange={handleChangeName}
            disabled={isOpen}
          />
          <Button
            rounded={"full"}
            px={10}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
            disabled={!name || (!isWinner && isOpen)}
            onClick={handleStartGame}
          >
            {isWinner ? "Reset the game" : "Get started"}
          </Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>

      <ScaleFade initialScale={0.9} in={isOpen}>
        <Flex w={"full"} justifyContent={"center"}>
          <Items />
        </Flex>
      </ScaleFade>
    </Container>
  );
};

export default MainPage;
