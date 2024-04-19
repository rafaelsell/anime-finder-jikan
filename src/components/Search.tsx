import { useForm, SubmitHandler } from 'react-hook-form';
import { InputGroup, InputLeftElement, Icon, Input, Stack } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

const searchSchema = z.object({
  searchQuery: z.string().min(1, "Search query is required"),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

export const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SearchFormInputs> = async data => navigate(`/search/${data.searchQuery}`);

  return (
    <Stack as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiSearch} color="gray.300" />}
        />
        <Input 
          type={'search'} 
          placeholder="Search..." 
          {...register("searchQuery")} 
        />
      </InputGroup>
      {errors.searchQuery && <p>{errors.searchQuery.message}</p>}
    </Stack>
  );
};

