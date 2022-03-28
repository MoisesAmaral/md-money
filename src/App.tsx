import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import {Header} from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { NewTransactionmodal } from "./components/NewTransactionModal";


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionmodal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />

      
      
    </>
  )
}


