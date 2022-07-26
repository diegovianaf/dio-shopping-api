import { getCustomRepository } from 'typeorm'
import { MessagesRepository } from '../repository/MessagesRepository'

interface IMessage {
  email: string
  message: string
}

class CreateMessageService {
  async execute({ email, message }: IMessage){
    const messageRepository = getCustomRepository(MessagesRepository)

    if (!email) {
      throw new Error("Please enter an email address!")
    }

    if (!message) {
      throw new Error("Please enter a message!")
    }

    const newMessage = messageRepository.create({ email, message })

    await messageRepository.save(newMessage)

    return newMessage
  }
}

export  { CreateMessageService }
