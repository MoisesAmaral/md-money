import { FormEvent, useState } from "react";
import Modal from "react-modal";


import closeImg from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, TransactionTypeContainer, RadialBox  } from "./styles";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionmodal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

      await  createTransaction({
        title,
        amount,
        category,
        type,
        createAt: ""
    })
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    
    onRequestClose()


    }
    
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay" //reseta o estilo padrão do modal
            className="react-modal-content" //reseta o estilo padrão do modal
        >
            <button
                type="button"><img 
                src={closeImg}
                alt="fechar modal"
                onClick={onRequestClose}
                className="react-modal-close"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadialBox
                    type="button"
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    actveColor="green"
                    >
                        <img src={incomeImage} alt="Entrada" />
                        <span>Entrada</span>
                    </RadialBox>

                    <RadialBox
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    actveColor="red"
                    >
                        <img src={outcomeImage} alt="Saída" />
                        <span>Saída</span>
                    </RadialBox>
                    
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
            

        </Modal> 
    )
}