import { useState } from 'react';

const ButtonHooks = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div>
            <button onClick={() => setModalOpen(true)}>
                Exibir Modal
            </button>
            <button onClick={() => setModalOpen(false)}>
                Remover Modal
            </button>
            { modalOpen && <Modal/>}
        </div>
    );
}

export default ButtonHooks;