import React, { useState } from 'react';
import { Modal, Image } from 'react-bootstrap';

function Certificate({ title, imgUrl }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="certificate-item" onClick={openModal}>
                <Image src={imgUrl} className='thumbnail' />
                <p>{title}</p>
            </div>

            <Modal show={showModal} onHide={closeModal} className="certificate-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={imgUrl} fluid />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Certificate;
