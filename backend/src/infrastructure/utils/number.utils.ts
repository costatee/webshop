// import { Decimal } from '../../prisma/generated/client/runtime';

// export const formatterThousand = (value: number | string): string => {
//   if (value === null || value === undefined || value === '') return '';

//   const numberFormatter = Intl.NumberFormat('en-US');
//   const stringed = String(value).replace(/,/g, '');
//   const parsedValue = parseInt(stringed, 10);

//   if (isNaN(parsedValue)) return '';

//   return numberFormatter.format(parsedValue);
// };

// export const formatDecimalPercentage = (value: Decimal): string => Math.round(Number(value) * 100).toString();
