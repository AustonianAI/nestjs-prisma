import { Module } from '@nestjs/common';
import { TweetsModule } from './modules/tweets/tweets.module';
import { ApiModule } from './api/api.module';
import { AppService } from './app.service';

@Module({
  imports: [TweetsModule, ApiModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
