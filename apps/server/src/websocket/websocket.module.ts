import { Global, Module } from '@nestjs/common';
import { NotificationsService } from '../notifications/notifications.service';
import { WebsocketGateway } from './websocket.gateway';

@Global()
@Module({
  providers: [WebsocketGateway, NotificationsService],
  exports: [WebsocketGateway, NotificationsService],
})
export class WebsocketModule {}
