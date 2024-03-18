import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class LoginDto {
  @Field(() => String, { description: 'Email do usuário' })
  @IsEmail({}, { message: 'O email deve ser um endereço de email válido.' })
  email: string;

  @Field(() => String, { description: 'Senha do usuário' })
  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  @MaxLength(20, { message: 'A senha não pode ter mais de 20 caracteres.' })
  password: string;
}
