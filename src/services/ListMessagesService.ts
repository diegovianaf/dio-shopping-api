import { getCustomRepository } from 'typeorm'
import { MessagesRepository } from '../repository/MessagesRepository'

class ListMessagesService{
  async execute() {
    const messageRepository = getCustomRepository(MessagesRepository);

    const allMessages = await messageRepository.find();

    return allMessages
  }
}

export { ListMessagesService }
