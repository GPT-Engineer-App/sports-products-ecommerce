import { Box, Flex, Grid, Heading, Image, Text, Button, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Basketball",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsfGVufDB8fHx8MTcxMzk0NjIzNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Football",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb290YmFsbHxlbnwwfHx8fDE3MTM5NDYyMzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Tennis Racket",
    price: 75.5,
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXR8ZW58MHx8fHwxNzEzOTQ2MjM2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 85.0,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MHx8fHwxNzEzOTQ2MjM2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Sports Store</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
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
    </Box>
  );
};

export default Index;
