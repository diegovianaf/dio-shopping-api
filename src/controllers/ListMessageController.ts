import { Request, Response } from 'express'
import { ListMessagesService } from '../services/ListMessagesService'

class ListMessageController {
  async handle(request: Request, response: Response) {
    const listMessageService = new ListMessagesService()

    const allMessages = await listMessageService.execute()

    return response.json(allMessages)
  }
}

export { ListMessageController }
