import React from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function ForgotPasswordForm({ setForgotPasswordForm }) {
  const [email, setEmail] = React.useState("");
  return (
    <div className="FormContainer">
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <input
            className="form-control"
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <br />
        <Text
          style={{ cursor: "pointer" }}
          color={"white"}
          onClick={() => setForgotPasswordForm(false)}
        >
          Sign in?
        </Text>
        <Stack spacing={6}>
          <button className="btn btn-primary">Request Reset</button>
        </Stack>
      </Stack>
    </div>
  );
}

export default ForgotPasswordForm;
