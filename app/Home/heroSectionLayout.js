'use client'
import { useState } from "react"
import HeroSection from "./components/heroComponent"
import PollModal from "./components/pollModalComponent"

export default function HeroSectionLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pollQuestion, setPollQuestion] = useState('');

    const handleOpenModal = () => { setIsModalOpen(true) };
    const handleCloseModal = () => { setIsModalOpen(false) };
    return (
    <>
        <HeroSection
            onOpenModal={handleOpenModal}
            pollQuestion={pollQuestion}
            setPollQuestion={setPollQuestion}
        />
        <PollModal isOpen={isModalOpen} onClose={handleCloseModal} pollQuestion={pollQuestion} setPollQuestion={setPollQuestion} />
    </>
    )
}