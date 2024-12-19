import { Container, Text, VStack, SimpleGrid} from '@chakra-ui/react'
import { use, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useProductStore } from '../../store/product.js';
import ProductCard from '../ProductCard.jsx';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
        fontSize={{ base: "22", sm: "28" }}
        fontWeight={"bold"}>
          Current Products
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} /> 
            ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
          No products found 😢
        <Link to={"/create"}>
          <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
            Create a product
          </Text>
        </Link>
      </Text>)}
      </VStack>
    </Container>
  )
}

export default HomePage