'use client';
import { VStack, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";

export default function RegisterInput({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        onRegister({ name, email, password });
        toaster.create({
          title: "Cadastro realizado com sucesso!",
          description: "Você pode fazer login agora.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toaster.create({
          title: "Erro no cadastro",
          description: "As senhas não coincidem!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <VStack spacing={3} align="stretch">
        <Text fontSize="sm" color="white"  fontWeight="medium">
          Nome Completo
        </Text>
        <Input
          type="text"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          bg="white"
          border="1px solid"
          borderColor="gray.300"
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
      </VStack>

      <VStack spacing={3} align="stretch">
        <Text fontSize="sm" color="white" fontWeight="medium">
          Email
        </Text>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bg="white"
          border="1px solid"
          borderColor="gray.300"
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
      </VStack>

      <VStack spacing={3} align="stretch">
        <Text fontSize="sm" color="white"  fontWeight="medium">
          Senha
        </Text>
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          bg="white"
          border="1px solid"
          borderColor="gray.300"
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
      </VStack>

      <VStack spacing={3} align="stretch">
        <Text fontSize="sm" color="white"  fontWeight="medium">
          Confirmar Senha
        </Text>
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          bg="white"
          border="1px solid"
          borderColor="gray.300"
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
      </VStack>

      <Button
        colorScheme="teal"
        size="lg"
        onClick={handleSubmit}
        isDisabled={!name || !email || !password || !confirmPassword}
        _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
      >
        Cadastrar
      </Button>
    </VStack>
  );
}