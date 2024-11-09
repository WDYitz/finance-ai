"use client";

import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <UpsertTransactionDialog
      isOpen={dialogIsOpen}
      setIsOpen={setDialogIsOpen}
    />
  );
};

export default AddTransactionButton;
