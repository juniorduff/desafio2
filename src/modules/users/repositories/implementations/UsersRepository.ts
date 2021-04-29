import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // CRIO NOVO USUARIO
    const CreatedAt = new Date();

    const user = new User();
    // ATRIBUO A ESTE OBJETO
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
    });
    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user; // Complete aqui
  }

  findByEmail(email: string): User | undefined {
    const userbyemail = this.users.find((user) => user.email === email);
    return userbyemail;
  }

  turnAdmin(receivedUser: User): User {
    const userAdmin = this.users.find((user) => user.id === receivedUser.id);
    Object.assign(userAdmin, {
      admin: true,
      updated_at: new Date(),
    });
    return userAdmin;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
