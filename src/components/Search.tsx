import { useForm, SubmitHandler } from "react-hook-form";
import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Stack,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const searchSchema = z.object({
  searchQuery: z.string().min(1, "Search query is required"),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SearchFormInputs> = async (data) =>
    navigate(`/search/${data.searchQuery}`);

  return (
    <Stack
      w={"100%"}
      maxW={"500px"}
      as={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon fontSize={"24px"} as={BiSearch} color="white" />}
        />
        <Input
          color={"white"}
          focusBorderColor={"brand.100"}
          borderRadius={"full"}
          type={"search"}
          placeholder="Search..."
          _placeholder={{color: 'white'}}
          {...register("searchQuery")}
        />
        <InputRightElement>
          <IconButton
            onClick={handleSubmit(onSubmit)}
            bgColor={"brand.100"}
            borderRadius={"full"}
            aria-label={""}
            icon={
              <Icon
                fontSize={"24px"}
                color={"brand.200"}
                as={BiChevronRight}
              ></Icon>
            }
          ></IconButton>
        </InputRightElement>
      </InputGroup>
      {errors.searchQuery && <p>{errors.searchQuery.message}</p>}
    </Stack>
  );
};
