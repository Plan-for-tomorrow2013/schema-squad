import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { MenuItem } from '../../models/menuItem.ts'
import { getMenu } from '../apis/menu.ts'

export function useMenu() {
  const query = useQuery<MenuItem[]>({ queryKey: ['menu'], queryFn: getMenu })
  return {
    ...query,
    // Extra queries go here e.g. addMenuItem: useAddMenuItem()
  }
}

export function useMenuMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menu'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddMenuItem
/* function useAddMenuItem() {
  return useMenuMutation(addMenuItem)
} */
