import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Contributors } from '../components/Contributors';
import { GithubSearchApp } from '../components/GithubSearchApp';


export const AppRouter = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={ <GithubSearchApp /> } />
        <Route path="contributors" element={<Contributors />} />
      </Routes>
    </div>

);
};
