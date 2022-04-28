import { NextFunction, Request, Response } from 'express';
import { ObjectID } from 'typeorm';
import AppDataSource from '../data-source';
import User from '../entity/User';

class UserController {
	private userRepository = AppDataSource.getRepository(User);

	async all(request: Request, response: Response, next: NextFunction) {
		return this.userRepository.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return this.userRepository.findOneBy({ id: new ObjectID(request.params.id) });
	}

	async save(request: Request, response: Response, next: NextFunction) {
		return this.userRepository.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		const userToRemove = await this.userRepository.findOneBy({ id: new ObjectID(request.params.id) });
		await this.userRepository.remove(userToRemove);
	}
}

export default UserController;
