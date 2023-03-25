import { Box, Typography } from "@material-ui/core";
import { genres } from "../assets/constants";
import { InputLabel, FormControl, NativeSelect } from "@mui/material";

const Discover = () => {
  const genreTitle = "Pop";
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={10}
      >
        <Typography variant="h4" component="h2">
          Discover {genreTitle}
        </Typography>

        <FormControl>
          <InputLabel variant="standard" htmlFor="genres-select">
            genres
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "genres-select",
            }}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
        song cart
      </Box>
    </Box>
  );
};

export default Discover;
