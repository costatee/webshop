import { ValidationError } from 'class-validator';

import { httpValidationErrorFactory } from './http-validation-error-factory';

function getOutput(errors: ValidationError[]) {
  return JSON.parse(JSON.stringify(httpValidationErrorFactory(errors)));
}

describe('httpValidationErrorFactory', () => {
  it('should return correct response for single error', () => {
    const error: ValidationError = {
      property: 'email',
      constraints: {
        isEmail: 'email has to have email format',
      },
    };
    expect(getOutput([error])).toMatchObject({
      status: 400,
      response: {
        code: 'isEmail',
        subErrors: [
          {
            code: 'isEmail',
            path: 'email',
          },
        ],
      },
    });
  });

  it('should return correct response for multiple errors', () => {
    const errors: ValidationError[] = [
      {
        property: 'title',
        value: 'Hello',
        constraints: {
          length: 'title must be longer than or equal to 10 characters',
        },
      },
      {
        property: 'text',
        value: 'this is a great post about hell world',
        constraints: {
          contains: 'text must contain a hello string',
        },
      },
    ];

    expect(getOutput(errors)).toMatchObject({
      status: 400,
      response: {
        code: 'length',
        subErrors: [
          {
            code: 'length',
            path: 'title',
          },
          {
            code: 'contains',
            path: 'text',
          },
        ],
      },
    });
  });

  it('should return correct response for nested errors', () => {
    const errors: ValidationError[] = [
      {
        property: 'email',
        constraints: {
          isEmail: 'email has to have email format',
        },
      },
      {
        property: 'title',
        value: { title: {} },
        children: [
          {
            property: 'text',
            value: 'this is a great post about hell world',
            constraints: {
              contains: 'text must contain a hello string',
            },
          },
        ],
      },
    ];

    expect(getOutput(errors)).toMatchObject({
      status: 400,
      response: {
        code: 'isEmail',
        subErrors: [
          {
            code: 'isEmail',
            path: 'email',
          },
          {
            code: 'contains',
            path: 'title.text',
          },
        ],
      },
    });
  });
});
