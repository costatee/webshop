export class DomainEvent<Payload, Type = string> {
  constructor(
    public readonly type: Type,
    public readonly payload: Payload,
  ) {}
}
