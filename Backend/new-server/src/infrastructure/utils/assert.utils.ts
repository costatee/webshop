export const assertUnreachable = (): never => {
  throw new Error('Unexpected condition type');
};
