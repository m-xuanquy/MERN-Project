import { Box, Heading, HStack, IconButton, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useProductStore } from '../store/product.js';
import { Toaster, toaster } from "@/components/ui/toaster"

const ProductCard = ({product}) => {

    const {deleteProduct} = useProductStore();
    
    const handleDeleteProduct = async(id) => {
        const {success, message} = await deleteProduct(id);
        if (!success){
            toaster.create({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
        else {
            toaster.create({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
    };

  return (
    <Box
      maxW={"320px"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      overflow={"hidden"}>
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl'  mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                {/* <Button colorScheme='normal' /> */}
                <IconButton
                    colorScheme='dark'
                    onClick={() => handleDeleteProduct(product._id)}
                />
            </HStack>
            
        </Box>
        
    </Box>
  );
};

export default ProductCard;

