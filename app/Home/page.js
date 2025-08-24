'use client'
import { useState } from 'react';

import NavComponent from "./components/navComponent";
import HeroSectionLayout from './heroSectionLayout';
import UseCaseComponent from './components/useCaseComponent';
import PollSection from './components/pollSectionComponent';
export default function HomePage() {


    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'All Polls', link: '/' },
        { name: 'MyPolls', link: '/' },]
    return (
        <div >
            <NavComponent navItems={navItems} />
            <HeroSectionLayout/>
            <UseCaseComponent />
            <PollSection/>
        </div>
    );
}