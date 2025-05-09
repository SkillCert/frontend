import { prisma } from '../../../lib/prisma';
import { CreateUserDto, UpdateUserDto, User } from './user.types';

/**
 * User Repository
 * Handles direct database interactions for the User entity
 */
export class UserRepository {
  /**
   * Find all users
   */
  async findAll(): Promise<User[]> {
    return prisma.users.findMany();
  }

  /**
   * Find user by ID
   */
  async findById(id: number): Promise<User | null> {
    return prisma.users.findUnique({
      where: { Id: id },
    });
  }

  /**
   * Find user by email
   */
  async findByEmail(email: string): Promise<User | null> {
    return prisma.users.findUnique({
      where: { Email: email },
    });
  }

  /**
   * Create a new user
   */
  async create(data: CreateUserDto): Promise<User> {
    return prisma.users.create({
      data,
    });
  }

  /**
   * Update an existing user
   */
  async update(id: number, data: UpdateUserDto): Promise<User> {
    return prisma.users.update({
      where: { Id: id },
      data,
    });
  }

  /**
   * Delete a user
   */
  async delete(id: number): Promise<User> {
    return prisma.users.delete({
      where: { Id: id },
    });
  }
}

// Export as a singleton
export const userRepository = new UserRepository();