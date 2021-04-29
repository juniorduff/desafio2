import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    user.admin = true;
    user.updated_at = new Date();
    if (!user) {
      throw new Error("This user is not exist");
    }
    return user;
    // Complete aqui
  }
}

export { TurnUserAdminUseCase };
