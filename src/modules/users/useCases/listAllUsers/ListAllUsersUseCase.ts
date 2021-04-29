import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User[] {
    const isUser = this.usersRepository.findById(user_id);

    if (!isUser) {
      throw new Error("this user is not valid");
    }
    if (!isUser.admin) {
      throw new Error("you don't have permissions'");
    }

    return this.usersRepository.list();
    // Complete aqui
  }
}

export { ListAllUsersUseCase };
