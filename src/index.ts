import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const senha = '123'


async function hashPassword(senha: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(senha, salt);
  return hashedPassword;
}


async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Luiz Silva',
      email: 'luiz@example.com',
      password: await hashPassword('senha123'),
      phone: '1234567890',
      type: 'admin',
      status: 'active',
    },
  });

  const categoria = await prisma.categoria.create({
    data: {
      name: 'Ficção Científica',
      description: 'Livros de ficção científica',
    },
  });

  const library = await prisma.library.create({
    data: {
      name: 'Biblioteca Central',
      quantityBooks: 1000,
      rows: 10,
      shelves: 5,
    },
  });

  const book = await prisma.book.create({
    data: {
      title: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      anoPublicacao: new Date('1954-07-29'),
      isbn: '978-0261103573',
      editora: 'HarperCollins',
      descricao: 'Uma obra épica de fantasia.',
      quantity: 5,
      status: 'disponível',
      categoriaId: categoria.id,
      libraryId: library.id,
    },
  });

  const emprestimo = await prisma.emprestimo.create({
    data: {
      userId: user.id,
      bookId: book.id,
      libraryId: library.id,
      status: 'em andamento',
      startDate: new Date(),
      endDate: new Date('2025-01-01'),
    },
  });

  const reserva = await prisma.reserva.create({
    data: {
      userId: user.id,
      bookId: book.id,
      status: 'reservado',
      startDate: new Date(),
    },
  });

  const notification = await prisma.notification.create({
    data: {
      userId: user.id,
      message: 'Seu livro foi emprestado com sucesso!',
      type: 'info',
      status: 'não lido',
    },
  });

  const relatorio = await prisma.relatorio.create({
    data: {
      userId: user.id,
      bookId: book.id,
      type: 'emprestimo',
      dataGeration: new Date(),
    },
  });

  const restricao = await prisma.restricao.create({
    data: {
      userId: user.id,
      bookId: book.id,
      motivation: 'Livro danificado',
      status: 'em vigor',
      startDate: new Date(),
      endDate: new Date('2025-01-01'),
    },
  });

  console.log('Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
