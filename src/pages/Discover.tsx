import { Box, Select, Typography } from "@material-ui/core";
import { genres } from "../assets/constants";

const Discover = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={10}
      >
        <Typography variant="h4" component="h2" color="textPrimary">
          Discover
        </Typography>
        <Select
          native
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </Select>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
        song cart
      </Box>
    </Box>
  );
};

export default Discover;
