import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./component/Dashboard";
import { Header } from "./component/Header";
import { NewTransactionModal } from './component/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

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
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={openNewTransactionModalHandler} />

            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={closeNewTransactionModalHandler}
            />

            <GlobalStyle />
        </TransactionsProvider>
    );
}
