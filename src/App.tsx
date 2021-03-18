import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./component/Dashboard";
import { Header } from "./component/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function openNewTransactionModalHandler() {
        setIsNewTransactionModalOpen(true)
    }

    function closeNewTransactionModalHandler() {
        setIsNewTransactionModalOpen(false)
    }

    return (
        <>
            <Header onOpenNewTransactionModal={openNewTransactionModalHandler} />

            <Dashboard />

            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={closeNewTransactionModalHandler}
                >
                <h2>Cadastrar transação</h2>
            </Modal>

            <GlobalStyle />
        </>
    );
}
