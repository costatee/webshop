export class NamedError extends Error {
  constructor(
    public readonly name: string,
    public readonly message: string,
    public readonly payload?: unknown,
  ) {
    super(message);
  }
}
