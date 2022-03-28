import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadialBox  } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { useState } from "react";


type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionmodal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');


    
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

            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Titulo" />
                <input type="number" placeholder="Valor" />

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

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>


            </Container>
            

        </Modal> 
    )
}