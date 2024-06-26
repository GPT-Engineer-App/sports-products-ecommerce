import { Box, Grid, Heading, Image, Text, Button, VStack, HStack, IconButton, ButtonGroup } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { useState } from "react";

const products = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: ["Basketball", "Football", "Tennis Racket", "Running Shoes"][index % 4],
  price: [25.99, 19.99, 75.5, 85.0][index % 4],
  image: ["https://images.unsplash.com/photo-1546519638-68e109498ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsfGVufDB8fHx8MTcxMzk0NjIzNXww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb290YmFsbHxlbnwwfHx8fDE3MTM5NDYyMzV8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXR8ZW58MHx8fHwxNzEzOTQ2MjM2fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1562183241-b937e95585b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MHx8fHwxNzEzOTQ2MjM2fDA&ixlib=rb-4.0.3&q=80&w=1080"][index % 4],
}));

const itemsPerPage = 10;
const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.min(5, Math.ceil(products.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  return (
    <Box p={5}>
      <Heading mb={4}>Sports Store</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {currentItems.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={5}>
              <VStack align="stretch">
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text fontSize="lg">${product.price.toFixed(2)}</Text>
                <HStack justify="space-between">
                  <Button leftIcon={<FaShoppingCart />} colorScheme="blue">
                    Add to Cart
                  </Button>
                  <IconButton aria-label="Add to favorites" icon={<FaHeart />} />
                  <IconButton aria-label="Search" icon={<FaSearch />} />
                </HStack>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
      <ButtonGroup variant="outline" spacing="6" mt="4">
        <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === maxPage}>
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Index;
