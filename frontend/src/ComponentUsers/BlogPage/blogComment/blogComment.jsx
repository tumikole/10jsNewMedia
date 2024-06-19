import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  Textarea,
} from "@chakra-ui/react";

function BlogComment({ isOpen, setIsOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent bg="#273142">
        <ModalHeader bg="#8a8a8a">Comment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <label htmlFor="" style={{color:"#0ef"}}>
          <Textarea />

            </label>
          <br />
          <br />
          <FormControl></FormControl>
        </ModalBody>
        <ModalFooter>
          {/* <Button colorScheme="blue" mr={3} disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </Button> */}
          <Button onClick={() => setIsOpen(false)}>Send comment</Button>

          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default BlogComment;
