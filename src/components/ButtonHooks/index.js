import { useState } from 'react';
import '../../global.css';

const ButtonHooks = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <section>
            <button onClick={() => setModalOpen(true)}>
                Exibir Modal
            </button>
            <button onClick={() => setModalOpen(false)}>
                Remover Modal
            </button>
            { modalOpen && <Modal/>}
        </section>
    );
}

const Modal = () => {
    <h3>Modal</h3>
}

export default ButtonHooks;