import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { CustomisationItem } from '../../models/customisationItem.ts'
import {
  getAllCustomisationMenu,
  getCustomisationMenu,
} from '../apis/custom_menu.ts'

export function useAllCustomMenu() {
  const query = useQuery<CustomisationItem[]>({
    queryKey: ['customAllMenu'],
    queryFn: getAllCustomisationMenu,
  })
  return {
    ...query,
    // Extra queries go here e.g. addCustomisationMenu: useAddCustomMenuItem()
  }
}

export function useCustomMenu(menu_id: number) {
  const query = useQuery<CustomisationItem[]>({
    queryKey: ['customMenu', menu_id],
    queryFn: () => getCustomisationMenu(menu_id),
  })
  return {
    ...query,
    // Extra queries go here e.g. addCustomisationMenu: useAddCustomMenuItem()
  }
}

export function useCustomMenuMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customAllMenu', 'customMenu'],
      })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddMenuItem
/* function useAddMenuItem() {
  return useMenuMutation(addMenuItem)
} */
