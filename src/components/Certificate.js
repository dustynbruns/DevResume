import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';

function Certificate({ title, pdfUrl }) {
    const [showModal, setShowModal] = useState(false);
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <li className="certificate-item" onClick={openModal}>{title}</li>

            <Modal show={showModal} onHide={closeModal} className="certificate-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                            />
                        ))}
                    </Document>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Certificate;
