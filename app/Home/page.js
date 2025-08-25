'use client'
import { useState } from 'react';

import NavComponent from "./components/navComponent";
import HeroSectionLayout from './heroSectionLayout';
import UseCaseComponent from './components/useCaseComponent';
import PollSection from './components/pollSectionComponent';
export default function HomePage() {


    const navItems = [
        { name: 'Home', link: '/Home' },
        { name: 'About', link: '/' },
        { name: 'All Polls', link: 'Home/polls' },
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