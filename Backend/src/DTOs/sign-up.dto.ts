import LoginRequestDTO from './login.dto';

export default interface SignUpRequestDTO extends LoginRequestDTO {
  name: string;
}
