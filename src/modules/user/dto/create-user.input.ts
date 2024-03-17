import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nome do usuário' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome deve ser uma string.' })
  name: string;

  @Field(() => String, { description: 'Email do usuário' })
  @IsEmail({}, { message: 'O email deve ser um endereço de email válido.' })
  email: string;

  @Field(() => String, { description: 'CPF do usuário' })
  @IsNotEmpty({ message: 'O CPF não pode ser vazio.' })
  @IsString({ message: 'O CPF deve ser uma string.' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
    message:
      'O CPF não está no formato correto. Deve estar no formato XXX.XXX.XXX-XX.',
  })
  cpf: string;

  @Field(() => String, { description: 'Senha do usuário' })
  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  @MaxLength(20, { message: 'A senha não pode ter mais de 20 caracteres.' })
  password: string;

  @Field(() => String, { description: 'Celular do usuário' })
  @IsNotEmpty({ message: 'O número de celular não pode ser vazio.' })
  @IsString({ message: 'O número de celular deve ser uma string.' })
  mobileNumber: string;

  @Field(() => String, { description: 'Endereço do usuário' })
  @IsNotEmpty({ message: 'O endereço não pode ser vazio.' })
  @IsString({ message: 'O endereço deve ser uma string.' })
  address: string;

  @Field(() => String, { description: 'Bairro do usuário' })
  @IsNotEmpty({ message: 'O bairro não pode ser vazio.' })
  @IsString({ message: 'O bairro deve ser uma string.' })
  district: string;

  @Field(() => String, { description: 'Cidade do usuário' })
  @IsNotEmpty({ message: 'A cidade não pode ser vazia.' })
  @IsString({ message: 'A cidade deve ser uma string.' })
  city: string;

  @Field(() => String, { description: 'CEP do usuário' })
  @IsNotEmpty({ message: 'O CEP não pode ser vazio.' })
  @IsString({ message: 'O CEP deve ser uma string.' })
  cep: string;
}
