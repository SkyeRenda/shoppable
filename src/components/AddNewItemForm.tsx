import React, { forwardRef, Ref } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const AddNewItemForm = forwardRef(
  (props: {
    handleAddShoppingItem: () => void;
    itemNameRef: Ref<HTMLInputElement>;
  }) => {
    return (
      <>
        <Input
          inputRef={props.itemNameRef}
          placeholder="Enter name here"
        ></Input>
        <Button
          variant="contained"
          onClick={props.handleAddShoppingItem}
        >
          Add Item
        </Button>
        ;
      </>
    );
  }
);

export default AddNewItemForm;
