export class CreateRoleDto {
  readonly value: string;
  readonly description: string;
  readonly canEdit: boolean;
  readonly canBan: boolean;
}
