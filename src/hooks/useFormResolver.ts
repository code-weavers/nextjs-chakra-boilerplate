import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

export const useFormResolver = <T>(schema: AnyObjectSchema, options?: {}) => {
  return useForm<T>({
    ...options,
    resolver: yupResolver(schema),
    mode: 'all',
  });
};
