import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { FormControlLabel, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
    setTitle("");
    setDetails("");
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
        sx={{
          textDecoration: "underline",
        }}
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Note Title"
          variant="outlined"
          fullWidth
          color="secondary"
          required
          error={titleError}
          sx={{ margin: "20px 0px", display: "block" }}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          label="Details"
          variant="outlined"
          fullWidth
          color="secondary"
          required
          multiline
          rows={4}
          error={detailsError}
          sx={{ margin: "20px 0px", display: "block" }}
        />
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Sumbit
        </Button>
      </form>
    </Container>
  );
}
