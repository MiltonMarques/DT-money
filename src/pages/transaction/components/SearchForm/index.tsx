import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

const seachFormSchecema = z.object({
  query: z.string(),
})

type SeachFormInputs = z.infer<typeof seachFormSchecema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(seachFormSchecema),
  })

  async function handleSeachTransaction(data: SeachFormInputs) {
    await fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransaction)}>
      <input
        type="text"
        placeholder="Busque por trasaçoes"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
