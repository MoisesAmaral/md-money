import { createContext, useEffect, useState, ReactNode, useContext} from "react";
import { api } from "../services/api";

type Transaction = {
    id: number,
    title: string,
    amount: number,
    category: string,
    type: string,
    createAt: string
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface transactionsProviderProps {
    children: ReactNode
}
interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({ children }: transactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
    const response = await  api.post('/transactions', {...transactionInput,
        createAt: new Date().toISOString()})
        
    const { transaction } = response.data

    setTransactions([...transactions, transaction])

    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}