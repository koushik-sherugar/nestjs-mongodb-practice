import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './controller/book.controller';
import { Book, BookSchema } from './schemas/book.schema';
import { BookService } from './services/book.services';


const MONGODB_URL = process.env.MONGODB_URL
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'studentdb'}),
    MongooseModule.forFeature([{name: Book.name, schema: BookSchema}]),
    MongooseModule.forRoot('MONGODB_URL'),
  // MongooseModule.forFeature([{name:'user', schema:UserSchema}])
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
