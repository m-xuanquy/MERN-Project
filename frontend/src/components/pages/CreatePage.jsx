import React from 'react'
import { useState } from "react";
import { Container, VStack, Heading, Box, Input, Button} from '@chakra-ui/react';
import { useProductStore } from '../../store/product.js';
import { Toaster, toaster } from "@/components/ui/toaster"


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });


  const {createProduct} = useProductStore();

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
    else {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setNewProduct({name: "", price: "", image: ""});

    }
    
  };

  

  return (
  <Container maxW={"container.sm"}>
    <VStack space={8}>
      <Heading as={"h1"} size={"2x1"} text>Create a new product
      </Heading>

      <Box w={"full"} maxW={"md"} borderWidth={1} borderRadius={"lg"} p={8}>
        <VStack space={4}>
          <Input
            placeholder="Product name"
            name='name'
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <Input
            placeholder="Product price"
            name='price'
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <Input
            placeholder="Product image"
            name='image'
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <Button colorScheme="blue" w="full" onClick={handleAddProduct}>
            Add Product
          </Button>
          </VStack>
      </Box>
      <Toaster />
    </VStack>
    
  </Container>
  );
}

export default CreatePage