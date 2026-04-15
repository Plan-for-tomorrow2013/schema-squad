import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { CartItem } from '../../models/cartItem.ts'

// hook for reading the cart

export function useCart() {
  const query = useQuery<CartItem[]>({
    queryKey: ['cart'],
    initialData: [],
  })
  return {
    ...query,
    cart: query.data || [],
  }
}

export function useCartMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
  return mutation
}

export function useAddtoCart() {
  const queryClient = useQueryClient()
  return useCartMutation(async (item: Omit<CartItem, 'quantity'>) => {
    const cart = queryClient.getQueryData<CartItem[]>(['cart']) || []
    const existing = cart.find((newItem) => newItem.id === item.id)
    const nextCart = existing
      ? cart.map((newItem) =>
          newItem.id === item.id
            ? { ...newItem, quantity: newItem.quantity + 1 }
            : newItem,
        )
      : [...cart, { ...item, quantity: 1 }]
    queryClient.setQueryData(['cart'], nextCart)
  })
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient()
  return useCartMutation(async (id: number) => {
    const cart = queryClient.getQueryData<CartItem[]>(['cart']) || []
    queryClient.setQueryData(
      ['cart'],
      cart.filter((i) => i.id !== id),
    )
  })
}

export function useClearCart() {
  const queryClient = useQueryClient()
  return useCartMutation(async () => {
    queryClient.setQueryData(['cart'], [])
  })
}
