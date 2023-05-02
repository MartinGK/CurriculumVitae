import { IconButton, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function ContactBox() {
  const { mutate, isSuccess, isError } = useMutation<void>((formData) =>
    fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  );

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    if (
      data["firstName"] === "" ||
      data["secondName"] === "" ||
      data["email"] === "" ||
      data["message"] === ""
    ) {
      toast(<span className="text-white">Please fill all the fields!</span>);
      return;
    }
    mutate(data as any);
  };

  useEffect(() => {
    if (isSuccess) toast(<span className="text-white">Message sent!</span>);
    if (isError)
      toast(<span className="text-white">Something went wrong!</span>);
  }, [isSuccess, isError]);

  return (
    <form
      className="grid flex-col gap-5 rounded-lg px-2 py-5 !shadow-red !shadow-[0_0_10px_1px] md:mx-auto md:max-w-lg"
      onSubmit={handleSendMessage}
    >
      <h3>Contact me</h3>
      <TextField
        color="primary"
        id="firstName"
        name="firstName"
        placeholder="First name"
        variant="standard"
        type="text"
      />
      <TextField
        color="primary"
        id="secondName"
        name="secondName"
        placeholder="Second name"
        variant="standard"
        type="text"
      />
      <TextField
        color="primary"
        id="email"
        name="email"
        placeholder="Email"
        variant="standard"
        type="email"
      />
      <TextField
        color="primary"
        id="message"
        name="message"
        placeholder="Message"
        variant="standard"
        multiline
        rows={4}
      />
      <IconButton
        aria-label="send message"
        color="primary"
        className="w-fit justify-self-end"
        type="submit"
      >
        <AiOutlineSend className="ml-2 h-7 w-7 text-red" />
      </IconButton>
    </form>
  );
}
